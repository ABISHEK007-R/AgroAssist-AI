const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


async function askGemini(question, language) {

    const response = await ai.models.generateContent({

        model: "gemini-flash-lite-latest",

        contents: `
You are AgroAssist AI, a global agriculture expert chatbot.

Rules:
- Answer only agriculture related questions.
- Give simple answers that farmers can understand.
- Reply in the same language as the farmer.
- Support multiple languages including English, Tamil, Hindi, Japanese, Chinese, Portuguese, Russian and other languages.
- Give practical farming advice.
- If the question is not related to agriculture, politely say you only answer farming-related questions.

Detected Language:
${language}

Farmer Question:
${question}
`
    });


    return response.text;

}


module.exports = askGemini;