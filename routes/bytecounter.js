const express = require('express');
const router = express.Router();

let sumBytes = 0;

router.get('/', readBytes);

function readBytes(req, res) {
    res.json({
        totalBytes: sumBytes
    });
}

router.post('/', handleMsg);

function handleMsg(req, res) {
    let bytes = req.body.msg.bytes;
    sumBytes += bytes;

    res.json(true);
}

module.exports = router;