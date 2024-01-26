const express = require('express');
const router = express.Router();
const RefmatController = require('../../controllers/RefmatControllers');



router.route('/getRef')
    .get(RefmatController.getAllReferences)
    // .post(RefmatController.createNewRefmat)


//  router.route('/delete/:id')
//     .delete( RefmatController.deleteRefmat);
router.route('/addRef')
    // .get(RefmatController.getAllReferences)
    .post(RefmatController.createNewRefmat)


 router.route('/deleteRef/:id')
    .delete( RefmatController.deleteRefmat);



module.exports=router;