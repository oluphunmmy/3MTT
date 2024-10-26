console.log("connection...");

function sayHello() {
	console.log("Hello");
	return "Hello";
}
// let greet = document.getElementById("test");
// greet.addEventListener("click", sayHello);

// function as variable
var makeSum = function () {
	let result = 2 + 3;
	document.write(`2 + 3 = ${result}`);
	return result;
};