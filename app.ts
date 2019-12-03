function addinator(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo;
}

//if one input is a string, turns the return into a string, turns 2nd int into string
//unless the function inputs above are changed so they have to be a number using typescript
//change to number below, no more error when compiled
const numberOne = 5;
const numberTwo = 3.45;

const result = addinator(numberOne, numberTwo);

console.log(result);