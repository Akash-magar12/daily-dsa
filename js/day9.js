// ❓ Question 5: Chunk an Array
function chunkArray(arr, size) {
  console.log(arr);
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]

// ❓ Question 6: Find Missing Number
function findMissing(arr) {
  // your code
}

console.log(findMissing([1, 2, 4, 5]));
// Output: 3

// ❓ Question 7: Check Balanced Parentheses
function isBalanced(str) {
  // your code
}

console.log(isBalanced("{[()]}"));
// Output: true

// ❓ Question 8: Sum of Digits
function sumDigits(num) {
  let sum = 0;
  const newArr = num
    .toString()
    .split("")
    .map((val) => (sum += Number(val)));

  return sum;
  // your code
}

console.log(sumDigits(1234));
// Output: 10

// ❓ Question 9: Convert Snake Case to Camel Case
function toCamelCase(str) {
  const words = str.split("_");
  const firstWord = words[0];
  const camelCase = words
    .slice(1)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  return firstWord + camelCase.join("");
}

console.log(toCamelCase("hello_world_code"));
// Output: "helloWorldCode"

// ❓ Question 10: Frequency Counter
function frequencyCount(arr) {
  // your code
}

console.log(frequencyCount([1, 2, 2, 3, 1]));
// Output: {1: 2, 2: 2, 3: 1}
