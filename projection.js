const mongo = require('mongodb').MongoClient;
const age = process.argv[2];
const url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url,(err,db)=>{
	if(err){
		throw err;
	}else{
		let dbo = db.db('learnyoumongo');
		let parrots = dbo.collection('parrots')
  	parrots.find({
    	age: {
      	$gt: +age
    	}
    },
    {
    projection:{
    				_id: 0,
      			name: 1,
     				age: 1
     			}
    }).toArray(function(err, docs) {
   	if (err) throw err
    console.log(docs)
    db.close()
		})
	}
})
