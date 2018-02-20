
let a = [3, 5, 6, 7];
let b = [6, 2, 4, 9];

function ize (a, b, opt) {
  let result = [];
  let i;
  for (i = 0; i < a.length; i++) {
    switch (opt) {
      case '+':
        result.push(a[i] + b[i]);
        break;
      case '-':
        result.push(a[i] - b[i]);
        break;
      case '*':
        result.push(a[i] * b[i]);
        break;
      case '/':
        result.push(a[i] / b[i]);
        break;
      default:
        result.push('undefined');
    }
  } return result;
}
console.log(ize(a, b, '+'));
console.log(ize(a, b, '-'));
console.log(ize(a, b, '*'));
console.log(ize(a, b, '/'));

let price1 = 5;
let price2 = 6;
function total () {
    return sum = price1 + price2;
}

console.log("The number is " + total());

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * (5/9)
}

console.log(toCelsius(77));

let celsius = toCelsius(77);

console.log('The temperature is ' + celsius + ' or nearly that.');

var minimum = [3, 9, -6, 7];

console.log(Math.min(...minimum));

console.log(Math.max(...minimum));

console.log(Math.random()*9);
