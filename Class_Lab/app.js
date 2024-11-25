const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    try {
        const data = await fs.readFile("example.txt", "utf-8");
        res.send(data);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});