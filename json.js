"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

json = JSON.stringify(["🍎", "🍌"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // JavaScript에만 있는 특별한 데이타도 JSON으로 변환되지 않는다.
  jump: () => {
    // jump라는 함수는 odject에 있는 데이타가 아니므로 JSON으로 변환되지 않는다.
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // replacer 원하는 property만 정의하게 되면 JSON으로변환
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
// obj.jump(); ❌

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
