const express = require('express');
const router = express.Router();
const EvaluateController = require('../../controllers/EvaluateControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(EvaluateController.getAllEvaluation)
    .post(EvaluateController.createEvaluation)


 router.route('/update/:id')
    .put( EvaluateController.updateEvaluation);


module.exports=router;