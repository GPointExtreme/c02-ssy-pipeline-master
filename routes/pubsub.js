const express = require('express');
const router = express.Router();
const Request = require('request');

let subscribers = [];

router.post('/subscribers', addSubscriber);

function addSubscriber(req, res) {
	subscribers.push(req.body.subscriberUrl);
	res.json(true);
}

router.post('/', newMessage);

function newMessage(req, res) {
	for(let subscriber of subscribers) {
		Request.post({
			url: subscriber,
			json: { msg : req.body.msg }
		});
	}
	res.json(true);
}

module.exports = router;