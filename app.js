function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
//if one input is a string, turns the return into a string, turns 2nd int into string
//unless the function inputs above are changed so they have to be a number using typescript
var numberOne = '5';
var numberTwo = 3.45;
var result = add(numberOne, numberTwo);
console.log(result);
