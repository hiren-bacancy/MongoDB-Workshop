const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
  let dbo = db.db("learnyoumongo");
  if (err) throw err
  let parrots = dbo.collection('users')
  parrots.update({
    	username:'tinatime'
    }, {
    	$set:{
    		age:40
    	}
  },function(err) {
    if (err) throw err
    db.close()
	})
})
