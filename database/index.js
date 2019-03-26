const mysql = require('mysql');
const config = require('./db_config.js');

const db = mysql.createConnection(config.options);



