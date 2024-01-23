const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');
const verifyJWT = require('../../middleware/verifyJWT');


router.route('/')
    .get(RefmatController.getAllReferences)
    .post(RefmatController.createNewRefmat)


 router.route('/delete/:id')
    .delete( RefmatController.deleteRefmat);
router.route('/addref')
    .get(verifyJWT,RefmatController.getAllReferences)
    .post(verifyJWT,RefmatController.createNewRefmat)


 router.route('/refdelete/:id')
    .delete(verifyJWT, RefmatController.deleteRefmat);



module.exports=router;