const mongo = require('mongodb').MongoClient
let age = process.argv[2]

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  let dbo = db.db("learnyoumongo");
  if (err) throw err
  var parrots = dbo.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
