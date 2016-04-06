var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if(err) throw err
  db.collection('parrots').count({age:{$gt: +process.argv[2]}}, function(err, data){
      if(err) throw err
      console.log(data)
      db.close()
  })
})
