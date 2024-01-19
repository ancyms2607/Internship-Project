const express = require('express');
const router = express.Router();
const ProjectController = require('../../controllers/ProjectControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT,ProjectController.getAllGroups)


module.exports=router;