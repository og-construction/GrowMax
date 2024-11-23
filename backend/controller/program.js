const Program = require('../models/program');

// Create a new program
const createProgram = async (req, res) => {
    try {
        const { name, description } = req.body;
        const program = new Program({ name, description });
        await program.save();
        res.status(201).json({ message: 'Program created successfully', program });
    } catch (error) {
        res.status(500).json({ message: 'Error creating program', error: error.message });
    }
};

// Get all programs
const getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.find();
        res.status(200).json(programs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching programs', error: error.message });
    }
};

// Get a single program by ID
const getProgramById = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(200).json(program);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching program', error: error.message });
    }
};

// Update a program
const updateProgram = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const program = await Program.findByIdAndUpdate(
            req.params.id,
            { name, description, price },
            { new: true }
        );
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(200).json({ message: 'Program updated successfully', program });
    } catch (error) {
        res.status(500).json({ message: 'Error updating program', error: error.message });
    }
};

// Delete a program
const deleteProgram = async (req, res) => {
    try {
        const program = await Program.findByIdAndDelete(req.params.id);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(200).json({ message: 'Program deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting program', error: error.message });
    }
};

module.exports = {
    createProgram,
    getAllPrograms,
    getProgramById,
    updateProgram,
    deleteProgram,
};
