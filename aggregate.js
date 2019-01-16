const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  let dbo = db.db("learnyoumongo");
  if (err) throw err
  let parrots = dbo.collection('prices')
  parrots.aggregate([
   { $match: {
      size:process.argv[2]
    }},
   { $group: {
    _id: 'avgr',
     avgr: {
       $avg : '$price'
     }
   }}
  ]).toArray(function(err, results) {
    if (err) throw err
    console.log(results[0].avgr.toFixed(2))
    db.close()
  })
})
