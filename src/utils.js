export { square, add, subtract as default };
const square = (x) => {
  return x * x;
};
const add = (a, b) => a + b;
//* named exports

const subtract = (a, b) => a - b;
