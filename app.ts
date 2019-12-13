function add(n1: number, n2: number) {
    return n1 + n2;
}

//returning void type, this would be inferred, but this is for demo purposes
//if you do not have a return statement, it is void
//if you do have a return statement, technically it would be type of undefined, and not void
//void is the standard, and undefined would not generally be used
function printThisResult(num: number): void {
    console.log(`Result: ${num}`);
}

printThisResult(add(5,12));

//function can be set as a type
//combineValues accepts any function that takes two numbers and returns a number
let combineValues: (a: number, b: number) => number;

//set this equal to add, this fits as it takes two numbers and returns a number
combineValues = add;

console.log(combineValues(8, 8));