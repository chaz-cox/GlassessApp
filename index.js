const express = require('express');
const app = express();

app.use(express.json());

const mogoDB = require ('./persist/mongo');

const Glasses = require('./persist/glasses');

const flags = require('flags');
