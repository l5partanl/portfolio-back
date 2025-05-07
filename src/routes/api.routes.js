const express = require('express');
const router = express.Router();

router.use('/projects', require('./api/project.routes'));

module.exports = router;
