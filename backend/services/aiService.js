const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


async function askGemini(question) {
const response = await ai.models.generateContent({
    model: "gemini-flash-lite-latest",
    contents: `
You are AgroAssist AI, an agriculture expert chatbot.

Answer only agriculture related questions.

Give simple answers that farmers can understand.

Farmer Question:
${question}
`
});
    return response.text;
}


module.exports = askGemini;