const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
const chatRoutes = require("./routes/chatRoutes");
const voiceRoutes = require("./routes/voiceRoutes");


app.use("/api/chat", chatRoutes);
app.use("/api/voice", voiceRoutes);


// Test route
app.get("/", (req, res) => {
    res.send("AgroAssist AI Backend Running");
});


// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});