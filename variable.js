// 1. Use strict
// added in ES5
// use this for Vanilla JavaScript
"use strict";

// 2. Variable, rw(read/ write)
// let (added in ES6)
// mutalbe type
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것
// has no block scope
console.log(age);
age = 4;
var age;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object freeze())
// Mutable data types: all objects by default are mutable in JS
// immutalbe type
// 가리키고 있는 포인터가 잠겨있어서 값을 변경하지 못함
// favor immutalbe data type always for a few reasons:
// - security 해커들이 값을 변경하지 못한다.
// - thread safety 어플리케이션이 실행되면, 한가지의 프로세스가 할당되고 그 프로세스 안에서는
//                 다양한 스레드가 동시에 돌아가면서 어플리케이션을 좀더 빠르게 동작할 수 있도록
//                 도와주는데, 다양한 스레드들이 동시에 변수에 접근해서 변경할 수 있는데,
//                 동시에 변경하면 위험할 수 있음
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable Types
// primaitive, single item: number, string, boolean, null, undefined, symbol -> 값 자체가 메모리에 저장
// object, box container -> 너무 커서 메모리에 한번에 올라갈 수 없음. 오브젝트를 가리키는 레퍼런스를 통해 접근
// function, first-class function
// first-class function : 함수도 다른 데이타 타입처럼 변수에 할당 가능, 함수의 파라미터(인자)로도
//                        전달, 리턴 타입으로도 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
// 연산할 때 그 값이 0인지 아닌지 확인해야 한다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 크롬과 파이어폭스에서만 지원
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function
