const express = require('express');
const router = express.Router();
const authController = require('../../controllers/AuthControllers');

router.route('/login')
    .post(authController.handleLogin)



module.exports = router;