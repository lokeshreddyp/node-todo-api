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
//
// db.collection('Users').find({name: 'loki'}).toArray()
//
//
// .then((docs) => {
//
//    console.log(JSON.stringify(docs));
//  } , (err) => {
//    console.log(err);
//  });
//
// });

db.collection('Users').find().count().then((count) => {
  console.log(count);
} , (err) => {
  console.log(err);
});
});
//console.log("all" , TodoApp.find());
  // db.close();
