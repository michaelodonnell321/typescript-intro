//combined type, separated with | - either will work now
function combine(inputOne, inputTwo) {
    //this can handle numbers and strings with some extra logic
    var result;
    if (typeof inputOne === 'number' && typeof inputTwo === 'number') {
        result = inputOne + inputTwo;
    }
    else {
        result = inputOne.toString() + inputTwo.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Michael', 'Carolyn');
console.log(combinedNames);
