const express = require('express');
const router = express.Router();
const Request = require('request');

let inputUrl = null;
let outputUrl = null;

router.put('/config', updateConfiguration);

function updateConfiguration(req, res) {
	inputUrl = req.body.inputUrl;
	outputUrl = req.body.outputUrl;
	res.json(true);
}

function forwardMsg() {
	setTimeout(forwardMsg, 1000);
	if (inputUrl !== null && outputUrl !== null) {
		Request.get(inputUrl, handleMsg);
	}
}

function handleMsg(error, res, body) {
	let msgBody = JSON.parse(body);
	if(typeof msgBody.msg !== "undefined") {
		Request.post({
			url: outputUrl,
			json: { msg : msgBody.msg }
		});
	}
}

forwardMsg();

module.exports = router;