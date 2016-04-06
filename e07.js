'use strict'

const mongodb = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/' + process.argv[2]

mongodb.connect(url, function(err, db) {
  if(err) throw err
  db.collection(process.argv[3]).remove({_id:process.argv[4]}, function(err, data){
      if(err) throw err
      db.close()
  })
})
