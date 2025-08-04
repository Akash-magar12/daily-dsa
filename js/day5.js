// ❓ Q1: Create a function that returns the union of two arrays (removing duplicates).
// 📌 Example: [1, 2, 3], [2, 3, 4, 5] → [1, 2, 3, 4, 5]
function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [2, 3, 4, 5]));

// ❓ Q2: Write a function that returns the longest word in a given sentence.
// 📌 Example: "watch me someone" → "someone"
function longest(str) {
  const word = str.split(" ");
  word.sort((a, b) => a.length - b.length);
  return word[word.length - 1];
}

console.log(longest("watch me someone"));

// ❓ Q3: Create a function that counts the number of vowels (a, e, i, o, u) in a string.
// 📌 Example: "javascript" → 3
function count(str) {
  let countVowel = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str.split("").forEach((w) => {
    if (vowels.includes(w.toLowerCase())) {
      return countVowel++;
    }
  });
  return countVowel;
}

console.log(count("javascriptaaAa"));

// ❓ Q4: Write a function that counts how many times each word appears in a string.
// 📌 Example: "hello world hello" → { hello: 2, world: 1 }
function wordFrequency(str) {
  let count = {};
  const word = str.split(" ");
  word.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  return count;
}

console.log(wordFrequency("hello world hello hello aksh mai mai"));

// ❓ Q5: Write a function that checks whether two arrays are equal in values and order.
// 📌 Example: [1, 2, 3], [1, 2, 3] → true
function checkArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(checkArray([1, 2, 3, 4], [1, 2, 3, 4]));
