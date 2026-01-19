const multiplier = 2; // private

function double(x) {
	return (function (a, b) {
		return a * b;
	})(x, multiplier);
}

function isNumber(number) {
	return isFinite(number);
}

function logModuleInfo() {
	console.log("This module gives you functions to check for numbers and to double a number");
}

export { double, isNumber };
export default logModuleInfo;
