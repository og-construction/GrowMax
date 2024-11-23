const express = require('express');
const Program = require('../models/Events');

const router = express.Router();

// Get all programs
router.get('/', async (req, res) => {
  const programs = await Program.find();
  res.json(programs);
});

// Add a new program
router.post('/', async (req, res) => {
  const program = new Program(req.body);
  await program.save();
  res.status(201).json(program);
});

module.exports = router;
