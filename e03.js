'use strict'

const mongodb = require('mongodb').MongoClient
const age = process.argv[2]
const url = 'mongodb://localhost:27017/learnyoumongo'

mongodb.connect(url, function(err, db) {
  if(err) throw err
  db.collection('parrots').find({
    age:{
      $gt: +age
    }
  }).toArray(function(err,docs){
    if(err) throw err
    console.log(docs)
    db.close()
  })
})