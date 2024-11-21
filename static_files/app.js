const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();
const PORT = process.env.PORT || 8000;



app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static('public/images'));


app.get('/', (req, res) => {
    res.render("Home");
});
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}!`);
});