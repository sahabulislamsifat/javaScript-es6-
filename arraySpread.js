// Array Spreading  ****

// const arrayOne = [1, 2, 3, 4];
// const arrayTwo = arrayOne;
// const arrayTwo = [...arrayOne];
// const arrayTwo = [];

// for (let item of arrayOne) {
//   arrayTwo.push(item);
// }

// arrayOne.push(44);
// arrayTwo.push(555);

// console.log(arrayOne);
// console.log(arrayTwo);

// Array Destructuring

// const names = [
//   "Abdul Khalek",
//   "Shamsun Nahar",
//   "Sajul Islam",
//   "Khadija Akter",
//   "Abdullah Ayan",
// ];

// const name1 = names[0];
// const name2 = names[1];
// const name3 = names[2];

// console.log(name1, name2, name3);

// const [a, b, c] = [
//   "Abdul Khalek",
//   "Shamsun Nahar",
//   "Sajul Islam",
//   "Khadija Akter",
//   "Abdullah Ayan",
// ];
const [, , c] = [
  "Abdul Khalek",
  "Shamsun Nahar",
  "Sajul Islam",
  "Khadija Akter",
  "Abdullah Ayan",
];

// const [a, _, c] = [
//   "Abdul Khalek",
//   "Shamsun Nahar",
//   "Sajul Islam",
//   "Khadija Akter",
//   "Abdullah Ayan",
// ];

// console.log(a);
// console.log(a,c);

console.log(c);
