const { Router } = require('express');
const router = Router();

const { getBooks, getBookById, createBook, updateBookById, deleteBookByID } = require('../controllers/books.controller')

router.route('/') 
    .get( getBooks )
    .post( createBook )

router.route('/:id')
    .get( getBookById )
    .put( updateBookById )
    .delete( deleteBookByID )
module.exports = router;