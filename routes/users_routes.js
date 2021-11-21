const { Router } = require('express')

const { getUsers, getUserById, checkUserCountByName, addNewUser } = require('../controllers/users_controller')

const router = Router()

router.get('/checkusercountbybame', checkUserCountByName)

router.get('/:id', getUserById)

router.get('/', getUsers)

router.post('/', addNewUser)

module.exports = router
