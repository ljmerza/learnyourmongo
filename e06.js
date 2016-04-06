'use strict'

const mongodb = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/' + process.argv[2]

mongodb.connect(url, function(err, db) {
  if(err) throw err
  db.collection('users').update({name:'Tina'}, {$set:{age:40}},function(err, data){
      if(err) throw err
      db.close()
  })
})
