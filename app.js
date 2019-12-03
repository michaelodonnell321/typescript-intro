function addinator(numberOne, numberTwo, showResult) {
    //javascript way you could throw an error if inputs are not numbers
    //   if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
    //     throw new Error("Not a number!!");
    //   }
    if (showResult) {
        console.log(numberOne + numberTwo);
    }
    else {
        return numberOne + numberTwo;
    }
}
//if one input is a string, turns the return into a string, turns 2nd int into string
//unless the function inputs above are changed so they have to be a number using typescript
//change to number below, no more error when compiled
//all numbers are floats
var numberOne = 5;
var numberTwo = 3.45;
var printResult = true;
addinator(numberOne, numberTwo, printResult);
