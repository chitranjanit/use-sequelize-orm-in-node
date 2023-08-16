const express = require('express');
const app = express();

const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'FakeDatabase',
});

app.listen(3001, () => {
  console.log('server is running');
});
