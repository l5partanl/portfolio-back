const express = require('express');
const router = express.Router();

router.use('/projects', require('./api/project.routes'));
//router.use('/about', require('./api/about.routes')); // futuro
//router.use('/contact', require('./api/contact.routes')); // futuro

module.exports = router;
