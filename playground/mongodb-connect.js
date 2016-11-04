const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log("unable to conncet to db!!");
  }
  console.log("connected successfully :)");

// db.collection('Todos').insertOne ({
//   text: 'something to do',
//   Completed : false
// },
//   (err,result) => {
//
//     if(err) {
//     return  console.log(err);
//     }
//     console.log("record is " , JSON.stringify(result.ops, undefined, 2));
//   });

db.collection('Users').insertOne ({

name: 'LokeshReddy',
age : 23,
location : 'maryville'

}, (err ,result) => {
  if(err) {
  return  console.log(err);
  }
  console.log("Your new recoed is" ,JSON.stringify(result.ops,undefined,2));
});
//console.log("all" , TodoApp.find());
  db.close();


});
