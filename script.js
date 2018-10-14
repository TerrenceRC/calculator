const numbers = document.querySelectorAll("[id^='num']");

numbers.forEach((numbers) => {
 	numbers.addEventListener('click', (e) => {
  		console.log(numbers.id);
  	 }); 
});

function addition(numA, numB) {
	return numA + numB;
}

function subtraction(numA, numB) {
	return numA - numB;
}

function divide(numA, numB) {
	return numA / numB;
}

function multiply(numA, numB) {
	return numA * numB;
}

function operate(operator, numA, numB) {
	return operator(numA, numB);
}