const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');



router.route('/getRef')
    .get(RefmatController.getAllReferences)
    



router.route('/addRef')
    .post(RefmatController.createNewRefmat)


 router.route('/deleteRef/:id')
    .delete( RefmatController.deleteRefmat);



module.exports=router;