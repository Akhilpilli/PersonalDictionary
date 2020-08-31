// importing models required to the app
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const mongooese = require('mongoose');

var app = express();

const route = require('./routes/route');

mongooese.connect('mongodb://localhost:27017/dictionary');

mongooese.connection.on('connected', () => {
    console.log('connected to database mongodb @ 27017');
});

mongooese.connection.on('error', (err) => {
    if(err){
        console.log('Error in the Database connection' + err);
    }
});

//port no
const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route); 

app.get('/', (req, res) => {
    res.send('connection to the server is good');
    console.log('connected to /');
});


app.listen(port, () => {
    console.log("server started at port: " + port);
});