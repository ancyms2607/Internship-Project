const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(RefmatController.getAllReferences)
    .post(RefmatController.createNewRefmat)


 router.route('/delete/:id')
    .delete( RefmatController.deleteRefmat);


module.exports=router;