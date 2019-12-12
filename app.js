function add(n1, n2) {
    return n1 + n2;
}
//returning void type, this would be inferred, but this is for demo purposes
function printThisResult(num) {
    console.log("Result: " + num);
}
console.log(printThisResult(add(5, 12)));
