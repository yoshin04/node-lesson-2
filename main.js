const express = require('express');
const path = require('path');
const app = express();
const users = require('./routes/users');
const layouts = require('express-ejs-layouts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(layouts);
app.use('/users', users);

app.listen(3000);