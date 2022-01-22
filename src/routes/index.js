const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUserById, deleteUserByID } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUserById)
router.delete('/users/:id', deleteUserByID);

module.exports = router;