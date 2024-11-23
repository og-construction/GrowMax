const express = require('express');
const router = express.Router();
const { createUser, getAllUsers   } = require('../controller/userCtrl');


// Define the routes
router.post("/register", createUser);

router.get('/all-users', getAllUsers); // Require auth and admin for all users


module.exports = router;
