function condition (a, b, cond) {
  switch (cond) {
    case '==':
      return a === b;
      break;
    case '!=':
      return a !== b;
      break;
    case '==':
      return a === b;
      break;
    case '!=':
      return a !== b;
      break;
    case '>':
      return a > b;
      break;
    case '<':
      return a < b;
      break;
    default:
      'undefined';
  }
}
console.log(condition(4, 2, '=='));
console.log(condition(5, 6, '!='));
console.log(condition(6, 6, '=='));
console.log(condition(8, 8, '!='));
console.log(condition(9, 5, '>'));
console.log(condition(9, 5, '<'));

// masodik

var a = [3, 5, 6, 7];

var b = [6, 2, 4, 9];

function something (a, b, opt) {
  var result = [];

  let i;

  for (i = 0; i < a.length; i++) {
    switch (opt) {
      case '+':
        result.push(a[i] + b[i]);
        break;
      case '-':
        result.push(a[i] - b[i]);
        break;
      case '/':
        result.push(a[i] / b[i]);
        break;
      case '*':
        result.push(a[i] * b[i]);
        break;
      default:
        return 'undefined';
    }
  }
  return result;
}
console.log(something(a, b, '+'));
console.log(something(a, b, '-'));
console.log(something(a, b, '/'));
console.log(something(a, b, '*'));

// harmadik

function muveletek (a, b, opt) {
  switch (opt) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
    case '/':
      return a / b;
      break;
    default:
      return 'undefined';
  }
}

console.log(muveletek(4, 5, '+'));
console.log(muveletek(6, 3, '-'));
console.log(muveletek(6, 2, '/'));
console.log(muveletek(2, 4, '*'));
