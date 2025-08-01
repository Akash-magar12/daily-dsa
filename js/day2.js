// ❓ Q1: How does this code remove duplicates from the array? What does `new Set()` do?
let arr = [3, 7, 1, 9, 4, 3, 2, 10, 6, 7, 1, 2, 3, 4, 5, 6, 7, 7];
let arr2 = [...new Set(arr)];
console.log(arr2);

// ❓ Q2: What is currying and how is it implemented in this function? Why use `add(2)(4)` instead of `add(2, 4)`?
// Currying in JavaScript means breaking a function with multiple arguments into a series of functions that take one argument at a time.

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

function addCurried(a) {
  return function (b) {
    return a + b;
  };
}
console.log(addCurried(2)(4));

// ❓ Q3: What does this code do? Does it reverse each word or the entire string?
const str2 = "mai hu akash";
const saved2 = str2.split("").reverse().join("");
console.log(saved2); // Output: hsaka uh iam (entire string reversed)

// ❓ Q4: How does this code reverse each word in the sentence but keep the word order?
const str = "mai hu akash";

const saved = str
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");

console.log(saved); // Output: iam uh hsaka

// ❓ Q5: How does setting `array.length = 0` clear the entire array? Is this a safe method?
var array = [1, 2, 3, 4, 5, 6];
array.length = 0;
console.log(array); // Output: []

// ❓ Q6: Why does this code not accurately check if a number is an integer? What would be the correct way to check it?
function checkInteger(n) {
  if (n % 2 === 0) {
    return "integer";
  } else {
    return "not integer";
  }
}

console.log(checkInteger(12.3)); // Wrong logic: checks even, not integer

// ✅ Correct way:
function isInteger(n) {
  if (Number.isInteger(n)) {
    return "integer";
  } else {
    return "not integer";
  }
}
console.log(isInteger(12.3)); // Output: not integer

// ❓ Q7: What does `arr.concat(arr)` do in this function? What will the output be?
function duplicte(arr) {
  return arr.concat(arr);
}

console.log(duplicte([1, 2, 3, 4, 5, 6])); // Output: [1,2,3,4,5,6,1,2,3,4,5,6]
