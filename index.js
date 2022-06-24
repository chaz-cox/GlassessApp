const express = require('express');
const app = express();

app.use(express.json());

const mogoDB = require ('./persist/mongo');

const Glasses = require('./persist/glasses');

const dotenv = require('dotenv');

const flags = require('flags');
flags.defineNumber("port",3000, "Ports of the http server");
flags.parse();

const port = flags.get('port') || process.env.PORT || 3000;

mogoDB.setUpConnectionHandlers(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
mogoDB.connect();

app.get('/Glasses/:id', (req, res) => {
    console.log('get it');
});

app.get('/Glasses', (req, res) => {
    console.log('gets all');
});

app.post('/Glasses/:id',(req,res) => {
    console.log("adds it");
});

app.put('/Glasses/:id', (req,res) => {
    console.log("changes it");
});

app.patch('/Glasses/:id',(req, res) => {
    console.log("adjusts it");
});

app.delete('/Glasses/:id',(req, res) => {
    console.log("removes it");
});


