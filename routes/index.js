const express = require('express')
const router = express.Router()

const restController = require('../controllers/restaurant-controller.js')
const userController = require('../controllers/user-controller.js')
const admin = require('./modules/admin.js')

const { generalErrorHandler } = require('../middleware/error-handler.js')

router.use('/admin', admin)

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/restaurants', restController.getRestaurants)

router.use('/', (req, res) => res.redirect('/restaurants'))

router.use('/', generalErrorHandler)

module.exports = router
