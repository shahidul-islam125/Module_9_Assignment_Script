//Ans: 1
//Create a new collection:
//To create a new collection in MongoDB, use the db.createCollection() method in the MongoDB shell. 
use('DATABASE_NAME')
db.createCollection("myCollection")
//Replace "myCollection" with the desired name for new collection.


//Ans: 2
//To remove a collection from a MongoDB database, use the db.collectionName.drop() method in the MongoDB shell. 
use('DATABASE_NAME')
db.myCollection.drop()
//Replace "myCollection" with the name of the collection you want to remove. This query will delete the specified collection and all of its documents.


//Ans: 3
//To insert a single document into a collection in MongoDB, you can use the insertOne() method 
use('DATABASE_NAME')
db.myCollection.insertOne({
    key1: "value1",
    key2: "value2",
    // Add more fields as needed
  })

//Ans: 4
//To delete or remove a single document from a collection in MongoDB, use the deleteOne() method
use('DATABASE_NAME')
db.myCollection.deleteOne({ key1: "value1" })

  