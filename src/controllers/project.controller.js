const Project = require('../models/project.model');

// GET /api/projects/:type
exports.getProjectsByType = async (req, res) => {
  const { type } = req.params;
  try {
    const projects = await Project.find({ type });
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
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
