function addinator(
  numberOne: number,
  numberTwo: number,
  showResult: boolean,
  phrase: string
) {
  //javascript way you could throw an error if inputs are not numbers
  //   if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
  //     throw new Error("Not a number!!");
  //   }
  const result = numberOne + numberTwo;
  if (showResult) {
    //use a variable to store math so that concatenation doesn't ruin our math
    console.log(phrase + result);
  } else {
    return numberOne + numberTwo;
  }
}

//if one input is a string, turns the return into a string, turns 2nd int into string
//unless the function inputs above are changed so they have to be a number using typescript
//change to number below, no more error when compiled
//all numbers are floats
const numberOne = 5;
const numberTwo = 3.45;
const printResult = true;
const resultPhrase = "Result is: ";

addinator(numberOne, numberTwo, printResult, resultPhrase);
