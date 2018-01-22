const express = require('express');
const router = express.Router();

router.post('/', handleMessage);

function handleMessage(req, res) {
	let msg = req.body.msg;
	console.log("Message: " + JSON.stringify(msg));
	res.json(true);
}

module.exports = router;