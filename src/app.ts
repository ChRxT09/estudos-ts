let userInput: unknown;
let userName: string;

function generateError(message: string, errorCorde: number): never {
	throw { message, errorCorde };
}

userInput = 5;
userInput = "adasd";

if (typeof userInput === "string") {
	userName = userInput;
}

generateError("AN error ocurred", 500);
