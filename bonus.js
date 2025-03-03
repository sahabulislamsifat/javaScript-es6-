// function add(obj) {
//   return obj.a + obj.b;
// }
function add({ a, b }) {
  //   return obj.a + obj.b;
  return a + b;
}

const obj = {
  a: 5,
  b: 10,
};

const result = add(obj);

console.log(result);
