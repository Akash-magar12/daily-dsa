// ❓ Question 1: Find the sum of squares of numbers in an array
function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
  }
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));
// ✅ Output: 14 (1^2 + 2^2 + 3^2)
// ❓ Question 2: Group array elements by their data type
function groupByType(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let type = typeof arr[i];
    if (!obj[type]) {
      obj[type] = [];
    }
    obj[type].push(arr[i]);
  }
  return obj;
}

console.log(groupByType([1, "hello", true, 42, "world", false]));
/* ✅ Output:
{
  number: [1, 42],
  string: ["hello", "world"],
  boolean: [true, false]
}
*/
// ❓ Question 3: Find the maximum number in an array
function findMax(arr) {
  return arr.sort((a, b) => b - a)[0];
}

console.log(findMax([3, 5, 7, 2, 8]));
// ✅ Output: 8
// ❓ Question 4: Count unique characters in a string
function countUniqueChars(str) {
  let word = str.split("");
  word = [...new Set(word)].length;
  return word;
}

console.log(countUniqueChars("abca"));
// ✅ Output: 3
// ❓ Question 5: Move all zeros in array to the end while keeping order
function moveZeros(arr) {
  let result = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero.push(0);
    } else {
      result.push(arr[i]);
    }
  }
  return result.concat(zero);
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// ✅ Output: [1, 3, 12, 0, 0]
