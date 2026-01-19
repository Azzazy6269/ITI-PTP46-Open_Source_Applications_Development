const fs = require("fs");
console.log("FILE OPERATIONS STARTED");


//synchonous read
function read_sync(path) {
    const Data = fs.readFileSync(path, "utf-8");
    const parsedData = JSON.parse(Data)
    //console.log(parsedData);
    return parsedData;
}


//Asynchronous read
function read_Async(path) {
    fs.readFile(path, "utf-8", (err,Data) => {
        if (err) {
             console.error(err);
             return;
        }
        const parsedData_Async = JSON.parse(Data);
        console.log(parsedData_Async);
    })
}

//synchronous write
function write_sync(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
    console.log("succeful Sync writing");
}

//ASynchronous write
function write_Async(path, data) {
    fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("successful Async writing");
    })
}

//Synchronous add
function add_sync(path,newData){
    let data = read_sync(path);
    data.push(newData);
    write_sync(path, data)
}

//Synchronous add
/*function add_Async(path,newData){
    let data = read_Async(path ,(newData)=>{
        data.push(newData);
        write_Async(path, data)
    });
    
}*/

module.exports = {
    read_sync,
    write_sync,
    read_Async,
    write_Async
};

const data =
    [
        {
            "id": 1,
            "name": "Alice Johnson",
            "age": 20,
            "course": "Computer Science",
            "grades": {
                "math": 90,
                "programming": 95
            }
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "age": 22,
            "course": "Data Science",
            "grades": {
                "statistics": 88,
                "machine_learning": 92
            }
        },
        {
            "id": 3,
            "name": "Carol Williams",
            "age": 21,
            "course": "Web Development",
            "grades": {
                "html": 95,
                "javascript": 89
            }
        }
    ]
//console.log(read_Async("./students.json"));
//console.log(read_sync("./students.json"));
read_Async("./students.json")
//read_sync("./students.json");
//write_Async("./students.json",data );
//write_sync("students.json", data);

//node fileOPerations.js
//add_sync("./students.json",{"name":"karim","age":22})