const express = require('express');
const router = express.Router();
const TeamManageController = require('../../controllers/TeamManageControllers');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
    .get(verifyJWT,TeamManageController.getAllGroups)


 router.route('/:id')
    .get(verifyJWT, TeamManageController.getOneGroup);


module.exports=router;