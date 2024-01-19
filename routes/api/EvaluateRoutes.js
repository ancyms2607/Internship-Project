const express = require('express');
const router = express.Router();
const EvaluateController = require('../../controllers/EvaluateControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT,EvaluateController.getAllEvaluation)
    .post(verifyJWT,EvaluateController.createEvaluation)


 router.route('/update/:id')
    .put(verifyJWT, EvaluateController.updateEvaluation);


module.exports=router;