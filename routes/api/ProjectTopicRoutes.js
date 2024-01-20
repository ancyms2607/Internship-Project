const express = require('express');
const router = express.Router();
const ProjectTopicController = require('../../controllers/ProjectTopicController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/getProjectTopics')
    .get(verifyJWT,ProjectTopicController.getAllProjectTopics)


module.exports=router;