const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Hello World!'));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    const name = "Mahfuz Ahmed";
    res.render("index", {name});
});

app.listen(PORT, () => {
    console.log(`Connected port ${PORT}!`);
});