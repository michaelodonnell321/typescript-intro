function addinator(numberOne, numberTwo) {
    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
        throw new Error('Not a number!!');
    }
    console.log(typeof numberOne);
    return numberOne + numberTwo;
}
//if one input is a string, turns the return into a string, turns 2nd int into string
//unless the function inputs above are changed so they have to be a number using typescript
//change to number below, no more error when compiled
var numberOne = '5';
var numberTwo = 3.45;
var result = addinator(numberOne, numberTwo);
console.log(result);
