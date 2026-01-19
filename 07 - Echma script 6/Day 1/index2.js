if (" ") {
	console.log("true");
} else console.log("false");

// Truthy values
// Falsy values
// false, 0, '', (null, undefined) nullish values

console.log("" || null || 0 || false || undefined);
console.log(Boolean(""));
console.log(Boolean(" "));

console.log(5 && "Ali" && true && [1, 2, 3] && { name: "Ahmed" });
console.log(null && "" && 0 & false & undefined);

let userName = undefined || "User123"; // short circuiting
console.log(userName);

let array1;

// let newArray;
// if (array1 && Array.isArray(array1)) {
// 	newArray = array1.map((element) => element * 2);
// }

let newArray = array1 && array1.map((element) => element * 2);
console.log(newArray);

console.log(undefined ?? 0 ?? false ?? null ?? "");

// let age = undefined || 10;
let age = 0 ?? 10; // nullish coalescing operator
console.log(age);
