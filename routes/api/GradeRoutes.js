const express = require('express');
const router = express.Router();
const GradeController = require('../../controllers/GradeControllers');
const verifyJWT=require('../../middleware/verifyJWT')

router.route('/')
    .get(verifyJWT,GradeController.getAllGrades)



module.exports=router;