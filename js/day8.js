// function sumOfSquares(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] ** 2;
//   }
//   return sum;
// }

// console.log(sumOfSquares([1, 2, 3]));
// // Output: 14 (1^2 + 2^2 + 3^2)

// function groupByType(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let type = typeof arr[i];
//     console.log(type);
//     if (!obj[type]) {
//       obj[type] = [];
//     }
//     obj[type].push(arr[i]);
//   }

//   return obj;
// }

// console.log(groupByType([1, "hello", true, 42, "world", false]));
// /* Output:
// {
//   number: [1, 42],
//   string: ["hello", "world"],
//   boolean: [true, false]
// }
// */
