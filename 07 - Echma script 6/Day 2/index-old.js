// ESM (ES Modules)
// import logInfo, { isNumber, double } from "./validations-esm.js";

// // console.log(validations);
// console.log(logInfo);
// console.log(isNumber);
// console.log(double);
// // logModuleInfo();

// console.log(double(5));
// // console.log(isNumber(5));

// console.log(document.querySelector("h1"));

//////////////////////////////

 const student12 = {
 	firstName: "Omar",
 	birthYear: 2003,
 	getAge() {
 		return 2025 - this.birthYear;
 	},
 };

 console.log(student12.getAge());

 const student22 = {
 	firstName: "Ali",
 	birthYear: 2001,
 	getAge() {
 		return 2025 - this.birthYear;
 	},
 };
 console.log(student22.getAge());

// Factory function
function getAge() {
	return 2025 - this.birthYear;
}

function createStudent(firstName, birthYear) {
	return {
		firstName,
		birthYear,
		calcAge: getAge,
	};
}

 const student13 = createStudent("Omar", 2003);
 const student23 = createStudent("Ali", 2001);

 console.log(student13.calcAge());
 console.log(student23.calcAge());

 console.log(student13.calcAge == student23.calcAge);

/////////////////////

// Constructor Function
function Student(firstName, birthYear) {
	if (!new.target) throw new Error("Cannot call Student constructor with new operator");

	console.log(this);
	this.firstName = firstName;
	this.birthYear = birthYear;
}

Student.logStudentInfo = function () {
	console.log("This is Student Constructor Function");
};

Student.prototype.getAge = function () {
	return 2025 - this.birthYear;
};

console.dir(Student);

// new operator
// 1) creates new object
// 2) set this to the newly created object
// 3) set object properties
// 4) return object

const student1 = new Student("Omar", 2003);
const student2 = new Student("Ali", 2001);

console.log(student1);
console.log(student2);
console.log(student1.getAge());
console.log(student2.getAge());
console.log(student1.getAge == student2.getAge);

// console.log(Student.logStudentInfo());

console.dir(Array);
const numbers1 = [1, 2, 3, 4];
const numbers2 = new Array(5, 6, 7, 8);
console.log(numbers1);
console.log(numbers2);
numbers1.forEach((element) => console.log(element), numbers2);
// numbers1.from([1, 2, 3]);

// console.log(Array.forEach());

// Array.prototype.forEach(function (element, index, arr) {
// 	console.log(index, arr);
// 	console.log(element);
// }, numbers1);

// const myForEach = Array.prototype.forEach.bind(numbers1, (element) => console.log(element));
// myForEach();

function OSStudent(firstName, birthYear, currentCourse) {
	this.firstName = firstName;
	this.birthYear = birthYear;
	this.currentCourse = currentCourse;
}
// const OSStudent = new Function()
console.log(Function);
console.dir(Function.prototype);
console.log(OSStudent.__proto__ == Function.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
const obj = {};
const obj2 = new Object();

console.log(OSStudent.prototype);

console.log(Object.prototype);

console.log(OSStudent.prototype.__proto__ == Object.prototype);

// Inheritance
OSStudent.prototype.__proto__ = Student.prototype;

const osstudent1 = new OSStudent("yehia", 2000, "js");
console.log(osstudent1);
console.log(osstudent1.getAge());
console.log(Object.prototype.__proto__);

console.log(Array.prototype.__proto__ == Object.prototype);
