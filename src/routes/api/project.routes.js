const express = require('express');
const router = express.Router();
const controller = require('../../controllers/project.controller');

// Ruta dinámica para cualquier tipo de proyecto (fullstack, design, about, etc.)
router.get('/:type', controller.getProjectsByType);

// Crear nuevo proyecto
router.post('/', controller.createProject);

module.exports = router;
