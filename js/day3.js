// ❓ Q1: How does this function reverse a number?
// ✅ It converts the number to a string, splits into characters, reverses them, joins back, and converts to a number.

function reverseNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(1234)); // Output: 4321

// ❓ Q2: How does this function check if a string is a palindrome?
// ✅ It compares the string with its reverse to see if they are the same.

function palindrome(stri) {
  var rev = stri.split("").reverse().join("");
  if (rev === stri) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("loop")); // Output: false
console.log(palindrome("poop")); // Output: true

// ❓ Q3: What does this function do with the input string?
// ✅ It sorts the characters of the string alphabetically.

function checkRev(num) {
  return num.split("").sort().join("");
}
console.log(checkRev("apple")); // Output: aelpp

// ❓ Q4: How does this function capitalize the first letter of every word?
// ✅ It splits the sentence into words, capitalizes the first letter of each, then joins them back together.

function capFirstWord(str) {
  let allWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allWords.join(" ");
}
console.log(capFirstWord("hey its me")); // Output: Hey Its Me
