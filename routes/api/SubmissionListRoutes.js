const express = require('express');
const router = express.Router();
const SubmissionListController = require('../../controllers/SublmissionListController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/getSubmissions')
    .get(verifyJWT,SubmissionListController.getAllSubmissions);


 router.route('/getSubmissions/:id')
    .get(verifyJWT, SubmissionListController.getOneSubmission);


 router.route('/deleteSubmission/:id')
   .delete(verifyJWT,SubmissionListController.deleteSubmission)

 router.route('/:topic/:batch')
    .get(verifyJWT,SubmissionListController.filterSubmissions);

module.exports=router;