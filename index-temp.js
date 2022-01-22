const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'library'
};

const pool = new Pool(config);

const getBooks = async ()=>{

    try{
        const res = await pool.query('select * from holaquetal');
        console.log(res.rows);
    }catch(err){
        console.log(err);
    }

}

const insertUser = async ()=>{

    try{
        const text = 'INSERT INTO users(id, userName, userPass) VALUES($1, $2, $3)';
        const values = [5, 'Diana', '123456'];
    
        const res = await pool.query(text, values);
        console.log(res);
    }catch(err){
        console.log(err);
    }

}

const deleteUser = async ()=>{
    try{
        const text = 'DELETE FROM users WHERE userName = $1';
        const value = ['Diana'];

        const res = await pool.query(text, value);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

const editUser = async () =>{

    try{
        const text = 'UPDATE users SET userName = $1, userPass = $2 WHERE userName = $3';
        const values = ['Jose Cruz', 123456, 'jose'];
    
        const res = await pool.query(text, values);
        console.log(res);
    }catch(err){
        console.log(err);
    }

}