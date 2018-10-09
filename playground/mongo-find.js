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

  db.collection('Users').find({name :'ritta'}).toArray()
  .then((docs)=>{console.log(JSON.stringify(docs,undefined,2))})
  .catch((err)=>{console.log('unable to fetch the dada')})

   
    
 
 // client.close();
});