"use strict";

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits

// a. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// fruits.forEach((fruit, index, array) => {
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit) => {
  console.log(fruit);
});

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// π note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
fruits.splice(1, 1); // μ§μ°λ €λ κ°―μλ₯Ό μ§μ νμ§ μμΌλ©΄ μμνλ μΈλ±μ€λΆν° λͺ¨λ μ­μ 
console.log(fruits);
fruits.splice(1, 1, "π", "π");
console.log(fruits);

// combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π₯₯")); // -1

// includes
console.log(fruits.includes("π"));
console.log(fruits.includes("π₯₯"));

// lastIndexOf
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π"));
