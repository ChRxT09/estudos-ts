// UNION TYPES

function combine(
	n1: number | string,
	n2: number | string,
	resultConversion: 'as-number' | 'as-text'
) {
	let result;
	if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === 'as-number') {
		result = + n1 + + n2;
	} else {
		result = n1.toString() + n2.toString();
	}
    return result.toString();
}

const combined = combine(30, 26, "as-number");
console.log(combined);
const combinedStr = combine("30", "26", "as-number");
console.log(combinedStr);

const combinedNames = combine("Max", " Jackman", "as-text");
console.log(combinedNames);

// LITERAL TYPES
