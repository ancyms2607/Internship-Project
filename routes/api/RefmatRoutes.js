const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .post(verifyJWT,RefmatController.createNewRefmat)


 router.route('/delete/:id')
    .delete(verifyJWT, RefmatController.deleteRefmat);


module.exports=router;