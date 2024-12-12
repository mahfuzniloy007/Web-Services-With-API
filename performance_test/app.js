const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/testing', (req, res) => {
    // Throttle
    delay = 2000;
    setTimeout(() => {
        res.json({message: `Response Processed: ${req.body}`});
    }, delay);
});

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}!`);
});