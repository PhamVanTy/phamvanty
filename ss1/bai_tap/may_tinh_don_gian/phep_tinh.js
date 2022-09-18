function addition() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let sum = number1 + number2;
    document.getElementById('result').innerHTML = "Result Addition: " + sum;
}
function subtraction() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let sub = number1 - number2;
    document.getElementById('result').innerHTML = "Result Subtraction: " + sub;
}
function multiplication() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let multi = number1 * number2;
    document.getElementById('result').innerHTML = "Result Multiplication: " + multi;
}
function division() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let div = number1 / number2;
    document.getElementById('result').innerHTML = "Result Division: " + div;
}