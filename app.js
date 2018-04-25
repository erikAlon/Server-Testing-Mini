const mongoose = require('mongoose');
const server = require('./server');
const port = 3000;
mongoose.connect('mongodb://localhost/ServerTestingDB', {}, err => {
  if (err)
    return console.log(
      "There's and error at app.js while attempting to connect to ServerTestingDB.."
    );

  console.log('ServerTestingDB connection successful..');
});
server.listen(port, err => {
  if (err)
    console.log(
      `There\'s an error while attempting to listen on ${port}.. at app.js`
    );
});
