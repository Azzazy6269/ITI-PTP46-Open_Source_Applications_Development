//1.	Create a Database named "ITI_Mongo".
use ITI_Mongo

//2.	Create a Collection named "Staff".
db.createCollection("Staff");

//3.	Insert one document into the "Staff" collection: {_id, name, age, gender, department}.
db.Staff.insertOne({"_id":1 , "name":"Mohamed" , "gender":"male" , "department":"open source"})

//4.	Insert many documents into the "Staff" collection
db.Staff.insertMany([
{"_id":2,"age":25 , "name":"Osama" , "gender":"male" , "department":"open source"},
{"_id":3,"age":20 , "name":"Hoda" , "gender":"female" ,"manager":"Ibrahim", "department":"open source"},
{"_id":4,"age":15 , "name":"Ezz" , "gender":"male" , "department":"open source"}])

//5.	Query to find data from the "Staff" collection
db.Staff.find({})
db.Staff.find({"gender":"male"})
db.Staff.find({"age":{$gte:20 , $lte:25}})
db.Staff.find({"age":25 , "gender":"female"})
db.Staff.find({"age":20 , "gender":"female"})

//8.	Create a new collection called "test" and insert documents from Question 4.
db.test.insertMany([
{"_id":2,"age":25 , "name":"Osama" , "gender":"male" , "department":"open source"},
{"_id":3,"age":20 , "name":"Hoda" , "gender":"female" ,"manager":"Ibrahim", "department":"open source"},
{"_id":4,"age":15 , "name":"Ezz" , "gender":"male" , "department":"open source"}
])

//9.	Try to delete one document from the "test" collection where age is 15
db.test.insertOne({ _id: 5, name: "ahmed", age: 15 })
db.test.insertOne({ _id: 6, name: "eman", age: 15 })
db.test.deleteOne({age:15}) //delete the first matched document 
db.test.deleteMany({age:15}) //delete all matched documents
db.test.find({})

//10.	 try to delete all male gender
db.test.deleteMany({"gender":"male"})
db.test.find({})

//11.	Try to delete all documents in the "test" collection.
db.test.deleteMany({})
db.test.find({})