const express = require("express");

const router = express.Router();


router.post("/", (req, res) => {

    const userMessage = req.body.message;

    const reply = `You asked: ${userMessage}`;

    res.json({
        answer: reply
    });

});


module.exports = router;