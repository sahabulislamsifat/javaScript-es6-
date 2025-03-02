// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let item of array) {
//   console.log(item);
// }

// forEach , map

// function show(a) {
//   console.log(a);
// }
// const show = (a) => console.log(a);

// array.forEach(show);
// array.forEach((a) => console.log(a));

// let sum = 0;

// const result = array.forEach((item) => console.log(item));
// const result = array.forEach((item) => {
//   // console.log(item);
//   sum += item;
// });

// console.log(sum);

// console.log(result);

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Callback Parameters : (item, index, whole array)

array.forEach((item, index, wholeArray) => {
  console.log("Item:", item);
  console.log("Item:", item, "Index:", index);
  console.log("Item:", item, "Index:", index, wholeArray);
});
