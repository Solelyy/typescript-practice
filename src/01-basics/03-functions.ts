//Create a function that returns the square of a number
const square = (a: number) => a*a;

//Create a function that logs a greeting, return type void
function greeting(): void { console.log("Hello!"); }

//Create an arrow function that multiplies two numbers.
const multiply = (a: number, b: number) => a * b;

//Create a function with an optional parameter (e.g., middleName) and returns full name.
function fullName (firstName: string,lastName: string, middleName? : string): string {
    return middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
}

//Create a function that accepts multiple numbers using rest parameters and returns their sum
function sum(...numbers: number[] ) {
    return numbers.reduce((acc, val) => acc + val, 0);
}