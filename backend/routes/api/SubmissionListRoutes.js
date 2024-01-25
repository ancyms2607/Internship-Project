const express = require('express');
const router = express.Router();
const SubmissionListController = require('../../controllers/SublmissionListController');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(SubmissionListController.getAllSubmissions);


 router.route('/getSubmissions/:id')
    .get( SubmissionListController.getOneSubmission);


 router.route('/deleteSubmission/:id')
   .delete(SubmissionListController.deleteSubmission)

 router.route('/filter')
    .post(SubmissionListController.filterSubmissions);

module.exports=router;