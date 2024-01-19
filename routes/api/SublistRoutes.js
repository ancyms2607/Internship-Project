const express = require('express');
const router = express.Router();
const SublistController = require('../../controllers/SublistControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT,SublistController.getAllSubmissions);


 router.route('/:id')
    .get(verifyJWT, SublistController.getOneSubmission);


 router.route('/:topic/:batch')
    .get(verifyJWT,SublistController.filterSubmissions);

module.exports=router;