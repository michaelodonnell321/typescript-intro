//type aliases
//using type to make a new type, name is taco, can be anything
type Combinable = number | string;
type ConversionDescriptor = 'as_number' | 'as_string';

//union types, separated with | - either will work now
function combine(
  inputOne: Combinable,
  inputTwo: Combinable,
  //literal types, union type as well, has to be exactly one or the other to be allowed
  resultConversion: ConversionDescriptor
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
