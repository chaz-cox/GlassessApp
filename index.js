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
    const id = req.params.id;
    Glasses.findById(id)
    .then((glasses) =>{
        if(glasses == null){
            res.status(404).json({message: "Glasses not found"});
            return;
        }
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message: "Something went wrong"});
    });
});

app.get('/Glasses', (req, res) => {
    Glasses.find()
    .then((glasses) => {
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message: "Something went wrong"});
    });
});

app.post('/Glasses',(req,res) => {
    Glasses.create(req.body)
    .then((glasses)=>{
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message:"Something went wrong"});
    });
});

app.put('/Glasses/:id', (req,res) => {
    const id = req.params.id;
    Glasses.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
    .then((glasses)=>{
        if (glasses == null){
            res.status(404).json({message: "Glasses not found"});
            return;
        }
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message:"Something went wrong"});
    });
});

app.patch('/Glasses/:id',(req, res) => {
    const id = req.params.id;
    Glasses.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
    .then((glasses)=>{
        if (glasses == null){
            res.status(404).json({message: "Glasses not found"});
            return;
        }
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message: "Something went wrong"});
    });
});

app.delete('/Glasses/:id',(req, res) => {
    const id = req.params.id;
    Glasses.findByIdAndDelete(id)
    .then((glasses)=>{
        if (glasses == null){
            res.status(404).json({message: "Glasses not found"});
            return;
        }
        res.json(glasses);
    })
    .catch((err) =>{
        res.status(500).json({message: "Something went wrong"});
    });
});

