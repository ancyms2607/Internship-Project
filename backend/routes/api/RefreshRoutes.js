const express = require('express');
const router = express.Router();
const RefreshTokenController = require('../../controllers/RefreshTokenControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get( RefreshTokenController.handleRefreshToken);

module.exports = router;