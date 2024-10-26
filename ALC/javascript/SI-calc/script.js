//(Princal * rate * time)/100
function calculateInterest() {
	const principal = parseFloat(document.getElementById("principal").value);
	const rate = parseFloat(document.getElementById("rate").value);
	const time = parseFloat(document.getElementById("time").value);

	console.log(principal, rate, time);

	if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
		const interest = (principal * rate * time) / 100;
		document.getElementById("interest").innerText = interest.toFixed(2);
	} else {
		alert("Please enter a valid number for all fields.");
	}
}

function resetFields() {
	document.getElementById("principal").value = "";
	document.getElementById("rate").value = "";
	document.getElementById("time").value = "";
	document.getElementById("interest").innerText = "0";
}

//Calling the functions with the click event on the button in HTML
document.getElementById("calculate").addEventListener("click", calculateInterest);
document.getElementById("reset").addEventListener("click", resetFields);

const data = fetch("url");

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((json) => console.log(json))
	.catch((err) => console.error(err))
	.finally(console.log("done"));