const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUserById, deleteUserByID } = require('../controllers/users.controller')

router.route('/') 
    .get( getUsers )
    .post( createUser )

router.route('/:id')
    .get( getUserById )
    .put( updateUserById )
    .delete( deleteUserByID )

module.exports = router;