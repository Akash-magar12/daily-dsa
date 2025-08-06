// function doubleElements(arr) {
//   // Your code here
//   const newArr = arr.map((elem) => elem * 2);

//   return newArr;
// }

// console.log(doubleElements([1, 2, 3]));
// // Output: [2, 4, 6]

// function toWords(str) {
//   return str.split(" ");
// }

// console.log(toWords("JavaScript is fun"));
// // Output: ["JavaScript", "is", "fun"]

// function longestWord(sentence) {
//   return sentence.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// console.log(longestWord("I love programming in JavaScript"));
// // Output: "programming"

// function countChar(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countChar("hello worldl", "l"));
// // Output: 3

function firstLast(str) {
  // Your code here
  const word = str.split("");
  return word[0] + word[word.length - 1];
}

console.log(firstLast("JavaScript"));
// Output: "Jt"
