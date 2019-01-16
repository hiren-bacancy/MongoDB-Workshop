const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'+process.argv[2]
mongo.connect(url, function(err, db) {
  let dbo = db.db(process.argv[2]);
  if (err) throw err
  let parrots = dbo.collection(process.argv[3])
  parrots.remove({
    _id : process.argv[4]
  },function(err) {
    if (err) throw err
    db.close()
	})
})
