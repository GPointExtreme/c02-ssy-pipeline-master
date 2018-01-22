const express = require('express');
const router = express.Router();

let queue = [];

router.get('/', readMessage);

function readMessage(req, res) {
	let msg = queue.shift();
	res.json({
		"msg" : msg,
	});
}

router.post('/', queueMessage);

function queueMessage(req, res) {
	queue.push(req.body.msg);
	res.json(true);
}

module.exports = router;