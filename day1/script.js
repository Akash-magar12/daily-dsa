// ✅ Question 1: Checking if a value is an array
function checkArray(inp) {
  return Array.isArray(inp);
}
console.log(checkArray(2)); // false
console.log(checkArray([1, 2, 3, 4])); // true

// ✅ Question 2: Shallow Cloning with Spread Operator
function cloned(inp) {
  const clonning = [...inp];
  return clonning;
}
console.log(cloned([1, 2, 3, 4, [1, 2, 3, [1, 2]]]));

// ✅ Question 3: Array Element Extractor
function getter(inp, n = 1) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(inp[i]);
  }
  return arr;
}
console.log(getter([1, 2, 3, 4], 2)); // [1, 2]
console.log(getter([1, 2, 3, 4])); // [1]

// ✅ Question 4: Joining Array of Strings
function joinner(inp) {
  return inp.join(" ");
}
console.log(joinner(["apple", "banana", "orange"])); // "apple banana orange"

// ✅ Question 5: Incorrect Use of filter()
const randomNames = ["phan", "echoBytes", "crimsonPack", "frostQueue", "shadeArray"];
const arr = randomNames.filter((val) => {
  if (val.length > 5) {
    return "more than five words"; // truthy
  } else {
    ("less");
  }
});
console.log(arr); // filters out names of length <= 5

// ✅ Question 6: Extracting Names Using map()
const people = [
  { name: "Aarav", age: 25, city: "Delhi" },
  { name: "Meera", age: 30, city: "Mumbai" }
];
const data = people.map((val) => val.name);
console.log(data); // ["Aarav", "Meera"]

// ✅ Question 7: Closure Example
function outerFunction() {
  let outerVar = "This is from outerside!";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}
const result = outerFunction();
result(); // logs: This is from outerside!

// ✅ Question 8: Async with Promise
const dataObj = { name: "John", age: 30 };
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataObj);
    }, 2000);
  });
}
fetchData().then((data) => {
  console.log("Data:", data); // logs after 2 seconds
});

// ✅ Question 9: Reduce with Initial Value
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((acc, curr) => acc + curr, 10);
console.log(sum); // 25

// ✅ Question 10: Filtering Names That Do NOT Include "a"
const indianNames = [
  "Aarav", "Vihaan", "Vivaan", "Anaya", "Ishaan", "Myra", "Reyansh",
  "Aadhya", "Kavya", "Dhruv", "Saanvi", "Aryan", "Meera", "Aditya", "Tanishq"];
const res1 = indianNames.filter((val) => {
  return !val.includes("a");
});
console.log(res1); // names without "a"

// ✅ Question 11: Filter Names with ≤1 'a' (case-insensitive)
const names = [
  "Aarav", "Vihaan", "Vivaan", "Anaya", "Ishaan", "Myra", "Reyansh",
  "Aadhya", "Kavya", "Dhruv", "Saanvi", "Aryan", "Meera", "Aditya", "Tanishq"];
const res2 = names.filter((val) => {
  if (val.toLowerCase().split("a").length <= 2) return true;
});
console.log(res2); // names with at most 1 'a'
