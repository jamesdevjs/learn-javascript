// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// ❗ one function === one thing
// ❗ naming; doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passwd by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("Hi!");
showMessage("Hi!", "Deoksu");

// Default parameter 가 없었을 때
function showMessage2(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}

showMessage2("Hi!");
// 4. Rest parameters (aded in ES6)
function printAll(...args) {
  //   for (let i = 0; i < args.length; i++) {
  //     console.log(args[i]);
  //   }
  //   for (const arg of args) {
  //     console.log(arg);
  //   }
  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "ellie");

// 5. Local scope
// ✨ 밖에서는 안이 보이지 않고, 안에서는 밖을 볼수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnther() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); // Uncaught ReferenceError: childMessage is not defined
}
printMessage();
// console.log(message); // Uncaught ReferenceError: message is not defined

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// 💩 Bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// ✨ Good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declearation can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions 함수 안에서 함수 자신을 스스로를 호출하는 것(피보나치수, 반복값의 평균 계산 등)
const printNo = function print() {
  console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// ➡ Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log("simplePrint");
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    // break;
    case "substract":
      return a - b;
    // break;
    case "divide":
      return a / b;
    // break;
    case "multiply":
      return a * b;
    // break;
    case "remainder":
      return a % b;
    // break;
    default:
      // return;
      throw Error("Unknown command");
  }
}

console.log(calculate("add", 1, 3));
console.log(calculate("divide", 4, 2));
