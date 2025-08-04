// ❓ Q1: How does this code filter the array `people` to include only those with gender `"male"`?
const people = [
  { name: "Alice", gender: "female" },
  { name: "Bob", gender: "male" },
  { name: "Charlie", gender: "male" },
  { name: "Diana", gender: "female" },
  { name: "Eli", gender: "non-binary" },
  { name: "Fatima", gender: "female" },
  { name: "George", gender: "male" },
];

const filtered = people.filter((item) => {
  return item.gender === "male";
});
console.log(filtered);

// ❓ Q2: What does the `clone` function do with the input array? How does it work?
function clone(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  return newArr;
}

console.log(clone([1, 2, 3, 3, 3]));

// ❓ Q3: What type of data is returned by the `checkType` function for arrays, objects, numbers, and strings?
function checkType(n) {
  return typeof n;
}

console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(5));
console.log(checkType("akash"));

// ❓ Q4: How does the `lastElement` function return the last `n` elements from an array? What happens if `n` is not provided?
function lastElement(arr, n = 1) {
  let newArr = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(lastElement([1, 2, 3, 4, 4]));
