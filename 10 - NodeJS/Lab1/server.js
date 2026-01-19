const http = require("http");
const fs = require("fs");
const fileOps = require("./fileOperations");

const server = http.createServer((req,res)=>{
    try{
    if(req.url === '/students'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const students = fileOps.read_sync("./students.json");
    res.end(JSON.stringify(students, null, 2));
   }else if (req.url === '/stats'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const students = fileOps.read_sync("./students.json");
    res.end(JSON.stringify({"num of students" : students.length}));
   }
   else if (req.url === '/courses') {
        const students = fileOps.read_sync("./students.json");
        const courses = students.map(s => s.course);
        const uniqueCourses = [...new Set(courses)];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(uniqueCourses, null, 2));
   }else{
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
   }
    }catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
   
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});