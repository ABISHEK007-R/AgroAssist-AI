const express = require("express");
const askGemini = require("../services/aiService");

const router = express.Router();


router.post("/", async (req, res) => {

    try {

        const question = req.body.message;

        const answer = await askGemini(question);

        res.json({
            answer: answer
        });

    } catch(error) {

        console.log(error);

        res.status(500).json({
            error: "Gemini response failed"
        });

    }

});


module.exports = router;