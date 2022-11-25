const express = require('express')
const user = require('../controller/user')
const router = express.Router()
const usercontroller = require ('../controller/user')

router.get('/users', usercontroller.index)
router.post('/users', usercontroller.store)
router.get('/user/:id', usercontroller.show)
router.put('/user/:id', usercontroller.update)
router.delete('/user/:id', usercontroller.delete)
  
  

  module.exports = router