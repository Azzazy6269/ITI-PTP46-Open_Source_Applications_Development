// Module Pattern (depends on closures)

const validations = (function () {
	// Modules
	// ES6 Classes
	// New Data Types (BigInt, Symbol)
	const multiplier = 2; // private
	console.log(multiplier);

	function double(x) {
		return (function (a, b) {
			console.log("IIFE is invoked");
			console.log(a, b);
			return a * b;
		})(x, multiplier);
	}

	function isNumber(number) {
		return isFinite(number);
	}

	// Number.isFinite();
	// isFinite(); // type coercion

	return { double, isNumber };
})();
console.log(validations);
