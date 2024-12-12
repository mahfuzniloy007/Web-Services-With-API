const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { readData } = require('../utils/file');

// Middleware to Parses incoming json to native js objects
router.use(express.json());

// Middleware Parse url-encoded strings
router.use(express.urlencoded({extended: true}));


// Create new user route
router.post("/users", userController.createUser);

// Update user
router.post("/users/:id/update", userController.updateUser);

// Update user
router.post("/users/:id/delete", userController.deleteUser);

// Render the view
router.get('/', (req, res) => {
    res.render("home");
});


module.exports = router;