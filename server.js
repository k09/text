const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const TEXT_FILE = "data.txt";

app.get("/read", (req, res) => {
    fs.readFile(TEXT_FILE, "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ content: data });
    });
});

app.post("/write", (req, res) => {
    const text = req.body.text || "";
    fs.writeFile(TEXT_FILE, text, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "File updated successfully" });
    });
});

app.listen(5001, () => console.log("Server running on port 5001"));
