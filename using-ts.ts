const button = document.querySelector("button");
//! means this will exist
//as is typecasting
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

// syntax of ": thing" is typescript, these will be numbers
function add(num1: number, num2: number) {
    return num1 + num2;
}

 //put + in front of input.value
button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});