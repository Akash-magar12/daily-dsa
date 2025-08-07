// ❓ Question 1:
// Write a function that takes an array of numbers and returns a new array
// with each element doubled.

function doubleElements(arr) {
  // Your code here
  const newArr = arr.map((elem) => elem * 2);
  return newArr;
}

console.log(doubleElements([1, 2, 3]));
// Output: [2, 4, 6]

// ❓ Question 2:
// Write a function that splits a sentence (string) into an array of words.

function toWords(str) {
  return str.split(" ");
}

console.log(toWords("JavaScript is fun"));
// Output: ["JavaScript", "is", "fun"]

// ❓ Question 3:
// Write a function that returns the longest word in a given sentence.

function longestWord(sentence) {
  return sentence.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord("I love programming in JavaScript"));
// Output: "programming"

// ❓ Question 4:
// Write a function that counts how many times a specific character appears in a string.

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("hello worldl", "l"));
// Output: 3

// ❓ Question 5:
// Write a function that returns a new string made from the first and last characters of the input string.

function firstLast(str) {
  // Your code here
  const word = str.split("");
  return word[0] + word[word.length - 1];
}

console.log(firstLast("JavaScript"));
// Output: "Jt"
