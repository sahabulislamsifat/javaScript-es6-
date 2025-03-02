// const numbers = [18, 48, 53, 41, 38, 46, 80, 25];
// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (item of numbers) {
//   sum += item;
// }

// console.log(sum);

// let multi = 1;

// for (let item of numbers) {
//   multi *= item;
// }

// console.log(multi);

// const numbers = [1, 2, 3, 4, 5];

// Array.Reduce((previous, current) => previous + current, initial value)

// const sum = numbers.reduce((prev, current) => prev + current, 0);
// const sum = numbers.reduce((prev, current) => prev + current, 5);
// const multi = numbers.reduce((prev, current) => prev * current, 1);

// console.log(sum);
// console.log(multi);

const numbersOfObject = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

const multi = numbersOfObject.reduce((prev, current) => prev * current.a, 1);

console.log(multi);
