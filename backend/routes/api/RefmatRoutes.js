const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');



router.route('/')
    .get(RefmatController.getAllReferences)
    .post(RefmatController.createNewRefmat)


 router.route('/delete/:id')
    .delete( RefmatController.deleteRefmat);
router.route('/addref')
    .get(RefmatController.getAllReferences)
    .post(RefmatController.createNewRefmat)


 router.route('/refdelete/:id')
    .delete( RefmatController.deleteRefmat);



module.exports=router;