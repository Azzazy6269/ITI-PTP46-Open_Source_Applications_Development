// Fetch API
document.querySelector("button").addEventListener("click", () => {
	let randomID = Math.floor(Math.random() * 30) + 1;

	const promise = fetch(`https://dummyjson.com/posts/${randomID}`)
		.then((response) => {
			console.log(promise);
			console.log(response);
			const newResponse = response.json();
			console.log(newResponse);

			return newResponse;
		})
		.then((data) => {
			console.log(data);

			const { userId } = data;

			const promise2 = fetch(`https://dummyjson.com/ers/${userId}`);
			console.log(promise2);

			return promise2;
		})
		.then((response2) => {
			return response2.json();
		})
		.then((data2) => {
			console.log(data2);
		})
		.catch((error) => {
			console.error(`Unexpected error, ${error.message}`);
		});
	// console.log(promise);
});

//////////////////

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve("Promise").then((response) => {
	console.log(response);
});

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

Promise.resolve("Promise 1").then((response) => {
	console.log(response);
});

Promise.resolve("Promise 2").then((response) => {
	console.log(response);
});

////////////////
// ES2017
// async / await

async function getData() {
	let randomID = Math.floor(Math.random() * 30) + 1;

	const response = await fetch(`https://dummyjson.com/posts/${randomID}`);
	console.log(response);

	const data = await response.json();
	console.log(data);

	const { userId } = data;

	const response2 = await fetch(`https://dummyjson.com/users/${userId}`);
	console.log(response2);

	const data2 = await response2.json();
	console.log(data2);

	return data2;
}
console.log(
	getData().then((result) => {
		console.log(result);
	})
);

const userResponse = await fetch(`https://dummyjson.com/users/1`); // top-level await
console.log(userResponse);

const userData = await userResponse.json();
console.log(userData);

console.log("FINISH");

//////////////////////////
