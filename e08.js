'use strict'

const mongodb = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongodb.connect(url, function(err, db) {
  if(err) throw err
  db.collection('parrots').count({age:{$gt: +process.argv[2]}}, function(err, data){
      if(err) throw err
      console.log(data)
      db.close()
  })
})
