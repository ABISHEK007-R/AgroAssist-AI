const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const chatRoutes = require("./routes/chatRoutes");

app.use("/api/chat", chatRoutes);
app.get("/", (req, res) => {
    res.send("AgroAssist AI Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});