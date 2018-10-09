const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Todos';

// Use connect method to connect to the server
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    //if assert will not match it will kick you out of the program
  assert.equal(null, err);
  console.log("Connected successfully to server");
//if dbName is not there it will create it (and save it if there will be some input)
  const db = client.db(dbName);

  db.collection('Users').insertOne({
    name: 'ritta',
    age: 28,
    location: 'joroja'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
    
  });
  client.close();
});