const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('./server');
const MyStuff = require('./myStuff');
chai.use(chaiHttp);
mongoose.connect('mongodb://localhost/ServerTestingMiniDB', {}, err => {
  if (err)
    return console.log(
      "There's an error while initializing ServerTestingMiniDB!"
    );

  console.log('ServerTestingMiniDB connection established');
});
