// TYPE OF SCOPE

// 1. Global Scope
// 2. Block Scope
// 3. Functional Scope

// GLOBAL SCOPE ****
// const x = 10;

// console.log(x);

// if (true) {
//   console.log(x);
// }

// function show() {
//   console.log(x);
// }

// show();

// Block Scope ****
// {
//   const x = 5;
//   console.log(x);
// }

// console.log(x);

// const variable = 5;

{
  //   const variable = 10;
  //   console.log(variable);
  //   var variable = 10;
  //   console.log(variable);
}

// console.log(variable);

// FUnctional SCOPE *****

function showOf() {
  //   const x = 5;
  //   x = 5;
  //   console.log(x);
}

showOf();
// console.log(x);
