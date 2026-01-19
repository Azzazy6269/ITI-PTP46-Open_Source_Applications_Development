///////////////////////////////////////

/** Web APIs (BOM) */

// Timer APIs

// 1) setTimeout
// 2) setInterval

function logGreeting(greeting, name) {
	console.log(`${greeting}, ${name}`);
}

// let id = setTimeout(logGreeting, 3000, "Hello", "Omar");
// console.log(id);

// document.querySelector("button").addEventListener("click", function () {
// 	console.log("clearTimeout clicked!");
// 	clearTimeout(id);
// });

// let intervalID = setInterval(logGreeting, 3000, "Hello", "Omar");

// document.querySelector("button").addEventListener("click", function () {
// 	console.log("clearInterval clicked!");
// 	clearInterval(intervalID);
// });

function getData() {}

console.log("Start");

getData(); // blocking

setTimeout(logGreeting, 0, "Hello", "Omar");

console.log("End");
