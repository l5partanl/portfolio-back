const Project = require('../models/project.model');

// GET /api/projects/fullstack
exports.getFullstackProjects = async (req, res) => {
  const projects = await Project.find({ type: 'fullstack' });
  res.json(projects);
};

// GET /api/projects/design
exports.getDesignProjects = async (req, res) => {
  const projects = await Project.find({ type: 'design' });
  res.json(projects);
};

// POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
