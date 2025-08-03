// const people = [
//   { name: "Alice", gender: "female" },
//   { name: "Bob", gender: "male" },
//   { name: "Charlie", gender: "male" },
//   { name: "Diana", gender: "female" },
//   { name: "Eli", gender: "non-binary" },
//   { name: "Fatima", gender: "female" },
//   { name: "George", gender: "male" },
// ];

// const filtered = people.filter((item) => {
//   return item.gender === "male";
// });
// console.log(filtered);

// function clone(arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     newArr.push(element);
//   });
//   return newArr;
// }

// console.log(clone([1, 2, 3, 3, 3]));

// function checkType(n) {
//   return typeof n;
// }

// console.log(checkType([]));
// console.log(checkType({}));
// console.log(checkType(5));
// console.log(checkType("akash"));

function lastElement(arr, n = 1) {
  let newArr = [];
  for (let i = arr.length - n; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(lastElement([1, 2, 3, 4, 4]));
