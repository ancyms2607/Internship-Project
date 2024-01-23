const express = require('express');
const router = express.Router();
const ProjectTopicController = require('../../controllers/ProjectTopicController');


router.route('/')
    .get(ProjectTopicController.getAllProjectTopics)


module.exports=router;