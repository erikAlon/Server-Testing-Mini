const express = require('express');
const bodyParser = require('bodyParser');
const morgan = require('morgan');
const Marvel = require('./marvel');
const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

server.get('/api/mystuff', (req, res) => {
  MyStuff.find({}, (err, mystuff) => {
    if (err) {
      res.status(500).json({
        err: 'Hey! caught an error at GET /api/mystuff find method..'
      });
    }
    res.json(mystuff);
  });
});

module.exports = server;
