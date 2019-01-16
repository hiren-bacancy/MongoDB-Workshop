const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  let dbo = db.db("learnyoumongo");
  if (err) throw err
  let parrots = dbo.collection('parrots')
  parrots.count({
   age: {
      $gt: +process.argv[2]
    }
  },function(err,docs) {
    if (err) throw err
    console.log(docs)
    db.close()
	})
})
