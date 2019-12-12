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

console.log(printThisResult(add(5,12)));