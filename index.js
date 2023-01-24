const express = require('express');
const app = express();

app.use('/users', require('./routes/user.routes'));
app.use('/roles', require('./routes/roles.routes'));
app.use('/auth', require('./routes/auth.routes'));


module.exports = app;
