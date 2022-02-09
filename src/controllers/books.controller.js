const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'library'
}

const pool = new Pool( config );

const getBooks = async (req, res)=>{
    const response = await pool.query('SELECT * FROM books');
    res.status(200).json(response.rows);
}

const getBookById= async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.json(response.rows);
}

const createBook = async (req, res) =>{
    const { id, section, title, author } = req.body;

    const response = await pool.query('INSERT INTO books (id, section, title, author) VALUES ($1, $2, $3, $4)', [id, section, title, author]);
    console.log(response);
    res.json({
        message: 'Book Added Succesfully',
        body: { 
            book:{id, section, title, author}
        }
    })
}

const updateBookById = async (req, res)=>{
    const id = req.params.id;
    const { section, title, author } = req.body;
    const response = await pool.query('UPDATE books SET section = $1, title = $2, author = $3 WHERE id = $4', [section, title, author, id]);
    console.log(response);
    res.json('Book Updated successfully');
}

const deleteBookByID = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM books WHERE id = $1', [id]);
    console.log(response);
    res.json(`Book ${id} deleted successfully`);
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBookById,
    deleteBookByID
}