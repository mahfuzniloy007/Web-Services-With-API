const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

// Request Parameter
app.get('/', (req, res) => {
    const id = req.query.id;
    const username = req.query.username;

    res.send(`User ID: ${id}. Username: ${username}`);
});

//Request query
app.get('/users/:id', (req, res) =>{
    // User Input or Request Parameter
    const product_id = req.params.id;

    // Products array-like Object
    const products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
        {"id": 3, "name": "Product C"},
    ];

    // Define a finder/mapping function to grab the product by id
    const product = products.find(products => products.id == parseInt(product_id));

    // Accessing the product object variables through dot notation
    res.send(`Product ID: ${product.id}, Name: ${product.name}`);


});

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
