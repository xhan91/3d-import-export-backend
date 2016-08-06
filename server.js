'use strict';

const express = require('express');
const app = express();

const orm = require('./orm');

const port = process.env.PORT || 8000;
const router = express.Router();

router.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
    // res.json({ message: 'Hello World!' });
    res.sendFile('/index.html');
});

router.route('/all/:format/:origin_id').get(function(req, res){
    orm.findTrades(req.params.origin_id, req.params.format, res);
});

router.route('/:id/:format/:origin_id').get(function(req, res){

});

app.use('/', router);

app.listen(port);
console.log('Magic happens on ' + port);