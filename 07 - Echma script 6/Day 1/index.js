console.log("Hello, world!");
console.log(this);
console.log(window.x);
console.log(x);
var x = 5;
var x = 10;
console.log(x);

console.log(window.x);

{
	var number = 50;
	let letNum = 100;
}

function logNum() {
	var number2 = 100;
	let num2 =10;
}

 //console.log(number2);
 //console.log(letNum);

console.log(number);

// console.log(y);
let y = 10;
// let y = 15;
y = 15;

console.log(y);
console.log(window.y);
const z = 15;
// z = 20;
console.log(window.z);

console.log(window.name); 
 var name = "Ahmed";
console.log(window.name);

console.log(sumDeclaration(3, 4));

function sumDeclaration(a, b) {
	console.log(this);
	console.log(arguments);
	return a + b;
}
console.log(sumDeclaration(1, 2));

// console.log(sumExpression);
const sumExpression = function (a, b) {
	console.log(this);
	console.log(arguments);
	return a + b;
};
console.log(sumExpression);
console.log(sumExpression(1, 2));

const sumArrow = (a, b) => {
	// console.log(this);
	// console.log(arguments);

	return a + b;
};
console.log(sumArrow(1, 2));
/////////////////////////////////////

const array1 = [1, 2, 3, 4, 5];
const numbers = [6, 7, 8, 9, ...array1, [10, 20, 30]];
console.log(numbers);

// Destructuring
// let num1 = numbers[1];
// console.log(num1);
// let num0 = numbers[0];
// let num2 = numbers[2];

let [num0, num1, num2, , num4, , , , num8, [num9, ...nums]] = numbers; // destructuring
console.log(num0, num1, num2, num4, num8, num9, nums);

let [num00, ...arr] = numbers; // rest parameter
console.log(num00, arr);

function createObj(name, age) {
	return {
		name,
		age,
	};
}
const person1 = createObj("Ali", 22);
console.log(person1);

const info = { ...person1, track: "os", isStudent: true };
console.log(info);

 //let name = info.name;
let { track: specialization } = info; // object destructuring
 //let personName = name

// console.log(track);
console.log(specialization);
// name = "Omar";
// console.log(name);

/*
let track;
// let name = info.name;
({ track } = info); // object destructuring
// let personName = name

console.log(track);
// console.log(specialization);
// name = "Omar";
// console.log(name);
*/

///////////////////////////////////////////

const student = { name: "Ali", age: 22, track: "os", isStudent: true };
console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// for (let i = 0; i < student.length; i++)

// 1) for ... in (keys)
// 2) for ... of (values)

// for (let x of student) {
// 	console.log(x);
// }

for (let key in student) {
	console.log(key, student[key]);
}

for (let [key, value] of Object.entries(student)) {
	console.log(key, value);
}

const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

for (let key in numbersArray) {
	console.log(key, numbersArray[key]);
}

for (let value of numbersArray) {
	console.log(value);
}

// console.log(Object.fromEntries(numbersArray));
