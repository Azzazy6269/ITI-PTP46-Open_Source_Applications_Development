//1.	Find documents where the "tags" field exists.
db.inventory.find({tags:{$exists:true}})

//2.	Find documents where the "tags" field does not contain values "ssl" or "security."
db.inventory.find({tags:{$nin:["ssl","security"]}})

//3.	Find documents where the "qty" field is equal to 85.
db.inventory.find({qty:85})

//4.	Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator.
db.inventory.find({tags:{$all:["ssl","security"]}})
db.inventory.find({tags:["ssl","security"]})

//5.	Find documents where the "tags" array has a size of 3.
db.inventory.find({tags:{$size:3}})

//6.	Update the "item" field in the "paper" document, update "size.uom" to "meter" and using the `$currentDate` operator.

db.inventory.find({item:"paper"})
db.inventory.updateMany(
                        {item : "paper"},
                        {$set : {"size.uom" : "meter"},
                        $currentDate : {lastModified: true}}
)

db.inventory.updateOne({item: "laptopDevice"},
                        {$set:{"size.uom":"meter"},
                         $currentDate : {lastModified: true}}
)

db.inventory.updateMany({"item":"laptopDevice"},
                        {$set : {"size.uom" :"meter"},
                         $currentDate : {lastModified : true},
                         $setOnInsert : {"new item":true}},
                         {upsert : true}
)

db.inventory.replaceOne({item : "laptopDevice"},
                        {
                            item : "laptopDevice",
                            size : {"uom":"meter"},
                            "new item" : true,   
                        },
                        {upsert : true}
)
                        
//7.	Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."
db.inventory.insertOne({
                        "neme" : "Ahmed",
                        "ege" : 25,
})

db.inventory.updateOne({"neme":"Ahmed"},
                       {$rename:{
                           "neme" : "name",
                           "ege" : "age"
                       }}
)

//8.	Try to reset any document field using the `$unset` function.
db.inventory.updateMany({name:"Ahmed"},
                        {$unset : {
                            name:"",
                            age:""
                        }}
)

//9.	Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields.
db.inventory.find()
db.inventory.updateMany({},
                        {
                            $max:{salary:20},
                            $min:{overtime:20},
                            $inc:{age:3},
                            $mul:{quantity:2 , price:1.24}
                        }
)

//10.	Calculate the total revenue for product from sales collection documents within the date range '01-01-2020' to '01-01-2023'
//and then sort them in descending order by total revenue.
db.sales.aggregate([
                    {$match : {date :{
                                $gte : ISODate("2020-01-01"),
                                $lte : ISODate("2023-01-01")}}
                    },
                    {$group :{
                        _id: "$product",
                        totalRevenue: {$sum:"$revenue"}
                    }},
                    {$sort: {totalRevenue: -1}}
                    
])


//11.	Calculate the average salary for employees for each department from the employee’s collection.
db.employees.aggregate([
              {
                $group: {
                  _id: "$department",
                  averageSalary: { $avg: "$salary" }
                }},
              {$sort: { averageSalary: -1 }
 }
])

//12.	Use likes Collection to calculate max and min likes per title
db.likes.aggregate([
  {
    $group: {
      _id: "$title",
      maxLikes: { $max: "$likes" },
      minLikes: { $min: "$likes" }
    }
  }
])