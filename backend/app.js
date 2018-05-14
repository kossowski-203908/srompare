const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// SQl 
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test'
});

con.connect((err) => {
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});

con.query('SELECT * FROM dane', (err, rows) => {
	if(err) {
		console.log(error);
	}

	console.log('\nData received from Db:');
	console.log(rows[0].name);
	x = rows[0].name;
});
