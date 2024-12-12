const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const studentController = require('../controllers/studentController.js');
const apiLimiter = require('../middlewares/ratelimit.js');
const authenticateToken= require('../middlewares/auth.js');
//Views
router.get('/login', (req, res) => { res.render('login')});
router.get('/register', (req, res) => { res.render('register')});

//Create routes for controller actions
router.post('/login', authController.login);
router.post('/register', authController.register);
//router.post('/logout', authController.logout);

// Student Routes
router.get('/attendance', studentController.getHome);
router.post('/deletestudent', studentController.deleteStudent);
router.post('/delete', studentController.deleteAllRecords);
router.get('/api/v1/records', apiLimiter, studentController.getAllRecords);
router.post('/api/v1/addstudent', studentController.addStudent);
router.post('/addstudent', studentController.addStudent);
router.post('/updatestudent', studentController.updateStudent);


module.exports = router;