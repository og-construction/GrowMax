const express = require('express');
const router = express.Router();
const { getAllPrograms, getProgramById, createProgram, updateProgram, deleteProgram } = require('../controller/program');

// Get all programs
router.get('/', getAllPrograms);

// Get a single program by ID
router.get('/:id', getProgramById);

// Create a new program
router.post('/', createProgram);

// Update a program
router.put('/:id', updateProgram);

// Delete a program
router.delete('/:id', deleteProgram);

module.exports = router;
