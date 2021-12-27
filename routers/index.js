const express = require('express')
const router = express.Router()
const { signUp, updateUser , getAllUsers, getUser, deleteUser, addProduct, getProduct } = require('./controller')

router.post('/add', signUp );
router.post('/product', addProduct );
router.put('/:id', updateUser );
router.get('/all', getAllUsers);
router.get('/:id', getUser );
router.delete('/:id', deleteUser );
router.get('/products/:id', getProduct );


module.exports = router