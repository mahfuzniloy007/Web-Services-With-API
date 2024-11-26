const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { readData } = require('../utils/file');

// Middleware to Parses incoming json to native js objects
router.use(express.json());

// Middleware Parse url-encoded strings
router.use(express.urlencoded({extended: true}));

// Render the view
router.get('/', (req, res) => {
    res.render("home");
});

// Create new user route
router.post("/users", userController.createUser);

module.exports = router;