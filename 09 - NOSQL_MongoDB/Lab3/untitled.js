
//1.	Provide the MongoDB code for enforcing JSON schema validation when creating a collection named "employees" 
use Lab3_db

db.createCollection("employees",{
    validator: {
        $jsonSchema: {
            bsonType : "object",
            title : "Employee Required Input",
            required : ["name" , "age" , "department"],
            properties : {
                age :{
                    bsonType : "int",
                    minimum : 18
                },
                department :{
                    bsonType : "string",
                    "enum" : ["HR","Engineering","Finance"]
                }
            }
        }
    }
})

//2.	Create new Database named Demo
use Demo
db.createCollection("trainningCenter1")
db.createCollection("trainningCenter2")

var data=[
            {"_id" : "1",
            "name" : {"fname" : "Mohamed", "lname" : "Azzazy" },
            "age" : 23,
            "address" : ["zagazig","farouk st"],
            "status":"Active"
            },
            {"_id" : "2",
            "name" : {"fname" : "Mostafa", "lname" : "Ibrahim" },
            "age" : 25,
            "address" : ["zagazig","farouk st",],
            "status":"Active"
            }
          ]
          
db.trainningCenter1.insertOne(data[0])
db.trainningCenter2.insertMany(data)

db.getCollection("trainningCenter1").find({})
db.getCollection("trainningCenter2").find({})

//3.	Use find. explain function (find by age field) and mention scanning type
db.getCollection("trainningCenter1").find({}).explain() // COLLSCAN
db.getCollection("trainningCenter2").find({}).explain() // COLLSCAN

//4.	Create index on created collection named it “IX_age” on age field 
db.trainningCenter2.createIndex(
                        {"age" : 1},
                        {"name" : "IX_age"}
)

//5.	Use find. explain view winning plan for index created 
db.getCollection("trainningCenter2").find({"age":23}).explain() // IXSCAN

//6.	Create index on created collection named it “compound” on firstNsme and lastName
db.trainningCenter2.dropIndex("IX_Compound_name")

db.getCollection("trainningCenter2").find({"name.fname":"Mohamed"}).explain() // COLLSCAN
db.getCollection("trainningCenter2").find({"name.lname":"Azzazy"}).explain() // COLLSCAN
db.getCollection("trainningCenter2").find({"name.fname":"Mohamed","name.lname":"Azzazy"}).explain() // COLLSCAN
db.getCollection("trainningCenter2").find({"name.lname":"Azzazy","name.fname":"Mohamed"}).explain() // COLLSCAN

db.trainningCenter2.createIndex(
                            {"name.fname" : 1,"name.lname" : 1},
                            {"name" : "IX_Compound_name"}
)

db.getCollection("trainningCenter2").find({"name.fname":"Mohamed"}).explain() // IXSCAN
db.getCollection("trainningCenter2").find({"name.lname":"Azzazy"}).explain() // COLLSCAN
db.getCollection("trainningCenter2").find({"name.fname":"Mohamed","name.lname":"Azzazy"}).explain() // IXSCAN
db.getCollection("trainningCenter2").find({"name.lname":"Azzazy","name.fname":"Mohamed"}).explain() // IXSCAN

//7.	Drop Demo Database
db.dropDatabase()


