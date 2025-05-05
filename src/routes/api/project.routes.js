const express = require('express');
const router = express.Router();
const controller = require('../../controllers/project.controller');

router.get('/fullstack', controller.getFullstackProjects);
router.get('/design', controller.getDesignProjects);
router.post('/', controller.createProject);

module.exports = router;
