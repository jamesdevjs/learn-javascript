"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

json = JSON.stringify(["๐", "๐"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // JavaScript์๋ง ์๋ ํน๋ณํ ๋ฐ์ดํ๋ JSON์ผ๋ก ๋ณํ๋์ง ์๋๋ค.
  jump: () => {
    // jump๋ผ๋ ํจ์๋ odject์ ์๋ ๋ฐ์ดํ๊ฐ ์๋๋ฏ๋ก JSON์ผ๋ก ๋ณํ๋์ง ์๋๋ค.
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // replacer ์ํ๋ property๋ง ์ ์ํ๊ฒ ๋๋ฉด JSON์ผ๋ก๋ณํ
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  // rev
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); โ

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
