// ❓ Q1: Write a function that removes duplicate values from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// ❓ Q2: Write a function to return the second largest number from an array.
function secondLargest(arr) {
  const dup = [...new Set(arr)].sort((a, b) => b - a)[1];
  return dup;
}
console.log(secondLargest([10, 5, 8, 20, 15]));


// ❓ Q3: Write a function that prints numbers from 1 to 20. 
// For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", 
// and for multiples of both 3 and 5 print "FizzBuzz".
function fizz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizz();


// ❓ Q4: Write a function that returns the factorial of a number using a loop.
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));


// ❓ Q5: Write a function that takes a number and returns it reversed.
function reversed(num) {
  const converted = Number(num.toString().split("").reverse().join(""));
  return converted;
}
console.log(reversed(12345));


// ❓ Q6: Write a function that removes falsy values (false, null, 0, "", undefined, NaN) from an array.
function cleanArray(arr) {
  const cleaned = arr.filter((item) => {
    if (item) {
      return true;
    } else return false;
  });
  return cleaned;
}
console.log(cleanArray([0, 1, false, 2, "", 3, null, "uo"]));


// ❓ Q7: Write a function that returns true if two strings are anagrams (same letters, different order).
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  if (string1 === string2) return true;
  return false;
}
console.log(isAnagram("listen", "silent"));
