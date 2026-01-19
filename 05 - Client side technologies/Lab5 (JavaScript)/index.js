//question1
let arr1=[
    "tip1",
    "tip2",
    "tip3",
    "tip4",
    "tip5",
    "tip6",
    "tip7",
    "tip8",
    "tip9",
    "tip10"
];
var randomindex = Math.floor(Math.random()*arr1.length);
console.log(arr1[randomindex]);


//question2
let grades = [
    60,100,10,15,85
];
grades.sort(function(a,b){
    return b - a;
});
let highest = grades[0];
console.log(highest);
highest = grades.find(function (grade){
    return grade <=100;
});
console.log(highest);
let below60 = grades.filter(function(grade){
    return grade<60 ;
});
console.log(below60);


//question3
let students =[
    {Name: "Ahmed",
     Degree: 60
    },
    {Name: "Mostafa",
     Degree: 99
    },
    {Name: "Karim",
     Degree: 52
    },
];
let excellecnt = students.find(function(student){
    return (student.Degree >90 && student.Degree<=100);
});
console.log(excellecnt);

let failed = students.filter(function(student){
    return student.Degree<60;
});

failed.forEach(function(student){
    console.log(student.Name);
});

students.push({Name: "Mona",  Degree: 78});
students.forEach(function(student){
    console.log(student);
});

students.pop();
students.forEach(function(student){
    console.log(student);
});

students.sort(function (a,b){
    let nameA =a.Name.toLowerCase();
    let nameB = b.Name.toLowerCase();

    if(nameA>nameB){
        return 1;
    }else if(nameA<nameB){
        return -1;
    }
    return 0;
});
students.forEach(function(student){
    console.log(student);
});

students.splice(2,0,{Name: "othman",Degree: 60},{Name: "Lina",Degree: 99})
students.forEach(function(student){
    console.log(student);
});

students.splice(3,1);
students.forEach(function(student){
    console.log(student);
});
