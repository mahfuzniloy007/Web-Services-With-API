const express = require('express');
const app = express();
const port = 3000 || 8000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request received: ${req.method}, ${req.url}`);
    next();
});

app.get("/user/:id", (req, res) => {
    const userID = req.params.id;
    res.send(`User id is ${userID}`);
});

app.get("/search", (req, res) => {
    const query = req.params.q;
    res.send(`Search query is: ${query}`);
});




app.listen(port, () => {
    console.log(`Connected to port ${port}!`);
});