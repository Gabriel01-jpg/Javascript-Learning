// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; //0.9
num1 += num2; // 1.0

// o código está sendo calculado em binário, por isso o valor acaba se tornando diferente do que seria em decimal...
// a forma de resolver isso é atráves do parseFloat

num1 = parseFloat(num1.toFixed(2));

console.log(num1);