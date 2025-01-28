const express = require('express');
const router = express.Router();
const { createUser, getAllUsers ,getaUser  } = require('../controller/userCtrl');


// Define the routes
router.post("/register", createUser);

router.get('/all-users', getAllUsers); // Require auth and admin for all users

router.post('/login',getaUser);


module.exports = router;
