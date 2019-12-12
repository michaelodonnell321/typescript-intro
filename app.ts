//union types, separated with | - either will work now
function combine(
  inputOne: number | string,
  inputTwo: number | string,
  //literal types, union type as well, has to be exactly one or the other to be allowed
  resultConversion: 'as_number' | 'as_string'
) {
  //this can handle numbers and strings with some extra logic
  let result;
  if (typeof inputOne === "number" && typeof inputTwo === "number" || resultConversion === 'as_number') {
    result = +inputOne + +inputTwo;
  } else {
    result = inputOne.toString() + inputTwo.toString();
  }
//   if (resultConversion === 'as_number') {
//       return +result;
//   } else {
//       return result.toString();
//   }
  return result;
}

const combinedAges = combine(30, 26, 'as_number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as_number');
console.log(combinedStringAges);

const combinedNames = combine("Michael", "Carolyn", 'as_string');
console.log(combinedNames);
