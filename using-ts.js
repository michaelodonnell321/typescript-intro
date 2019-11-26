var button = document.querySelector("button");
//! means this will exist
//as is typecasting
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// syntax of ": thing" is typescript, these will be numbers
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
