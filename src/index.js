const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/books', require('./routes/books'));

app.listen(3000);
console.log('Server on port 3000');
