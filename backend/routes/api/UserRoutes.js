const express = require('express')
const router = express.Router()
const userController = require('../../controllers/UserControllers')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createNewUser)


module.exports = router;