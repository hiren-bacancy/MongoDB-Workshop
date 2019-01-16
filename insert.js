var mongo = require('mongodb').MongoClient
const assert = require('assert')

var url='mongodb://localhost:27017/learnyoumongo';
var fname = process.argv[2]
var lname = process.argv[3]

const client = new mongo(url);
var obj = {
firstName : fname,
lastName : lname
};

client.connect(function(err){
assert.equal(null,err);
const db = client.db('learnyoumongo');
db.collection("docs").insertOne(obj,function(err,r){
assert.equal(null,err);
assert.equal(1,r.insertedCount);
console.log(JSON.stringify(obj));
})
client.close();
});
