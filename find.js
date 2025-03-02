const numbers = [18, 48, 53, 41, 38, 46, 80, 25];

// let find = null;

// for (let item of numbers) {
//   if (item > 50) {
//     find = item;
//     // return;
//     break;
//   }
// }

// console.log(find);

// const result = numbers.find((item) => item > 50);
const result = numbers.find((item) => item > 50 && item % 2 === 0);

console.log(result);
