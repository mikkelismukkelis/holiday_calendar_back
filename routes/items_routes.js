const { Router } = require('express')
const { getItems, addNewItem, deleteItemById, replaceItemById } = require('../controllers/items_controller')

const router = Router()

router.delete('/:id', deleteItemById)

router.put('/:id', replaceItemById)

router.get('/', getItems)

router.post('/', addNewItem)

module.exports = router
