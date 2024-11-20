const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

// Request Parameter
app.get('/', (req, res) => {
    const id = req.params.id;
    const username = req.params.username;

    res.send(`User ID: ${id}. Username: ${username}`);
});

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
