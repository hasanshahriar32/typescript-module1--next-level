//normal function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 434));

// here the params types are not declared explicitly, so these are called any type
// add(" 2"+2)

// better way to do this using ts

function add1(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add1(1, 434));

const addarrow = (num1: number, num2: number): number => num1 + num2;
