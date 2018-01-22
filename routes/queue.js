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

module.exports = router;