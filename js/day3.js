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
  return rev === stri;
}
console.log(palindrome("loop")); // Output: false
console.log(palindrome("poop")); // Output: true



// ❓ Q3: What does this function do with the input string?
// ✅ It sorts the characters of the string alphabetically.

function checkRev(str) {
  return str.split("").sort().join("");
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



// ❓ Q5: What does this function do with the string "akasha"?
// ✅ It returns the number of times each character occurs in the string.

function occurance(str) {
  let occ = {};
  str.split("").forEach((char) => {
    if (!occ.hasOwnProperty(char)) {
      occ[char] = 1;
    } else {
      occ[char]++;
    }
  });
  return occ;
}
console.log(occurance("akasha")); 
// Output: { a: 3, k: 1, s: 1, h: 1 }



// ❓ Q6: What is wrong with this `sumed` function?
// ❌ `sum` was previously declared globally and reused — causing wrong total if called again.
// ✅ Best practice: declare `sum` inside the function to avoid side effects.

function sumed(num) {
  let sum = 0;
  num.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumed([1, 2])); // Output: 3



// ❓ Q7: What does this function do?
// ✅ It sums only the numeric elements in the array and ignores strings or other types.

let arr = ["hi", 2, "yo", 5];

function sumedFiltered(num) {
  let sum = 0;
  num.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    }
  });
  return sum;
}
console.log(sumedFiltered(arr)); // Output: 7
