const defaultResult = 0;
let currentResult = defaultResult;

//Fuction to add number x, in  (x + 10) * 3 / 2 - 1

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is: ' + result);
}

add(2, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);