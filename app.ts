//combined type, separated with | - either will work now
function combine(inputOne: number | string, inputTwo: number | string) {
    //this can handle numbers and strings with some extra logic
    let result;
    if (typeof inputOne === 'number' && typeof inputTwo === 'number') {
        result = inputOne + inputTwo;
    } else {
        result = inputOne.toString() + inputTwo.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Michael', 'Carolyn');
console.log(combinedNames);