const express = require('express')
const router = express.Router()

//Import all the controller file to use here as a callback function
const userController = require('../Controllers/userController')
const adminController = require('../Controllers/adminController')
const subAdminController = require('../Controllers/subAdminController')
const postController = require('../Controllers/postController')

//creating route 
//userController related API
router.get('/userCreate', userController.create)
router.get('/userRead', userController.read)
router.get('/userDelete', userController.delete)
router.get('/userUpdate', userController.update)

//adminController related API
router.get('/adminCreate', adminController.create)
router.get('/adminRead', adminController.read)
router.get('/adminDelete', adminController.delete)
router.get('/adminUpdate', adminController.update)

//subAdminController related API
router.get('/subAdminCreate', subAdminController.create)
router.get('/subAdminRead', subAdminController.read)
router.get('/subAdminDelete', subAdminController.delete)
router.get('/subAdminUpdate', subAdminController.update)

//postController related API
router.get('/postCreate', postController.create)
router.get('/postRead', postController.read)
router.get('/postDelete', postController.delete)
router.get('/postUpdate', postController.update)


//Export this file
module.exports = router;
