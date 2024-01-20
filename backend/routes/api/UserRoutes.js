const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/UserControllers')

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)


module.exports = router;