function add(n1: number, n2: number): number {
	return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

function printResult(num: number) {
	console.log("Result: ", num);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
addAndHandle(8, 8, (result: number) => console.log(result));

printResult(add(55, 13));
console.log(combineValues(8, 8));
