'use strict'

const mongodb = require('mongodb').MongoClient
const age = process.argv[2]
const url = 'mongodb://localhost:27017/learnyoumongo'

mongodb.connect(url, function(err, db) {
  if(err) throw err
  db.collection('parrots').find({
      // get agegreater than first argeument
      // only return name and age data
      age:{$gt: +age}}, {name:1, age:1, _id:0}
    ).toArray(function(err,docs){
    if(err) throw err
    console.log(docs)
    db.close()
  })
})