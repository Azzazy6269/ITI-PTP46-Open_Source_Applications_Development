console.log("Start");

setTimeout(() => console.log("Hello"), 1000);

const array = [1, 2, 3];
const newArr = array.map((el) => el * 2);
console.log(newArr);

console.log("End");

setTimeout(() => console.log("Bye"), 1000);

const clickedCallback = () => {
	console.log("clicked");
};

document.querySelector("button").addEventListener("click", clickedCallback);

console.log("Finish");

document.querySelector("button").removeEventListener("click", clickedCallback);

////////////////
// AJAX: Asynchronous JavaScript and XML
// XMLHttpRequest API
// Fetch API

const xhr = new XMLHttpRequest();
console.log(xhr);
console.log(xhr.responseText);

xhr.open("get", "https://dummyjson.com/products");
xhr.send();
console.log(xhr.responseText);

xhr.addEventListener("load", (event) => {
	console.log(event);
	console.log(xhr.responseText);
	console.log(typeof xhr.responseText); // JSON JavaScript Object Notation

	console.log(JSON.parse(xhr.responseText));
	products = JSON.parse(xhr.responseText).products;
	console.log(products);

	for (let i = 0; i < products.length; i++) {
		document.querySelector("tbody").innerHTML += `<tr><td>id: ${products[i].id}<td>
        <td>Title: ${products[i].title}<td>
        <tr>`;
	}
});

let randomID = Math.floor(Math.random() * 30) + 1;
console.log(randomID);

const request = new XMLHttpRequest();
request.open("get", `https://dummyjson.com/posts/${randomID}`);
request.send();

request.addEventListener("load", function () {
	if (request.status === 200) {
		console.log(request);
		const postData = JSON.parse(request.responseText);

		const { userId } = postData;

		const request2 = new XMLHttpRequest();
		request2.open("get", `https://dummyjson.com/users/${userId}`);
		request2.send();

		request2.addEventListener("load", function () {
			const data = JSON.parse(request2.responseText);
			console.log(data);
		});
	}
});

// Nested Callbacks (Callback hell)

////////////////
// Promise (Fetch API)
