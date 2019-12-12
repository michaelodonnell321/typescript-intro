//union types, separated with | - either will work now
function combine(inputOne, inputTwo, resultConversion) {
    //this can handle numbers and strings with some extra logic
    var result;
    if (typeof inputOne === "number" && typeof inputTwo === "number" || resultConversion === 'as_number') {
        result = +inputOne + +inputTwo;
    }
    else {
        result = inputOne.toString() + inputTwo.toString();
    }
    //   if (resultConversion === 'as_number') {
    //       return +result;
    //   } else {
    //       return result.toString();
    //   }
    return result;
}
var combinedAges = combine(30, 26, 'as_number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as_number');
console.log(combinedStringAges);
var combinedNames = combine("Michael", "Carolyn", 'as_string');
console.log(combinedNames);
