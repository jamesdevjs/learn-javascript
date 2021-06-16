// Objects
// one of the JavaScript's data types.
// a collection of related data and/or function
// Nearly all objects in JavaScript are instances of object
// object = {key: value}

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// const name = "ellie";
// const age = 4;
// print(name, age);

// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

const ellie = { name: "ellie", age: 4 };
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(ellie);

// With JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hanJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 코딩하는 그 순단 그 키에 해당하는 값을 받아오고 싶을 때 사용
ellie["hasJob"] = true;
console.log(ellie["name"]); // Computed properties
// 정확하게 어떤 키가 필요한 지 모를때 Computed properties 사용
console.log(ellie.hasJob);

function printValue(obj, key) {
  // key로 어떤 값이 들어올지 모름
  // console.log(obj.key); // object에 key라는 property가 있니? 없잖아 -> undefined
  console.log(obj["name"]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };

function makePerson(name, age) {
  return {
    // name: name,
    // age: age
    name, // name: name -> name, Property value shorthand
    age, // age: age -> age, Property value shorthand
  };
}

// 4. Constructor function
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this
}

const person4 = Person("ellie", 30);
console.log(person4);

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person5 = new Person1("Deoksu", 51);
console.log(person5);

// 5. In operator: propery existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 👍 6. for..in vs for..of
// for (key in ojb)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key]; // 1. name, 2. age
}

console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // fruit2가 fruit1에 덮어쓴다.
console.log(mixed.color);
console.log(mixed.size);
