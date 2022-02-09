const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'library'
}

const pool = new Pool( config );

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const getUserById= async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) =>{
    const { userName, userEmail, userPass } = req.body;

    const response = await pool.query('INSERT INTO users (userName, userEmail, userPass) VALUES ($1, $2, $3)', [userName, userEmail, userPass]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: { 
            user:{userName, userEmail, userPass}
        }
    })
}

const updateUserById = async (req, res)=>{
    const id = req.params.id;
    const { userName, userEmail, userPass } = req.body;
    const response = await pool.query('UPDATE users SET userName = $1, userEmail = $2, userPass = $3 WHERE id = $4', [userName, userEmail, userPass, id]);
    console.log(response);
    res.json('User Updated successfully');
}

const deleteUserByID = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserByID
}