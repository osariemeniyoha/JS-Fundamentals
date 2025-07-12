// 9-add.js

function add(a, b) {
  return a + b;
}

const a = Number.parseInt(process.argv[2]);
const b = Number.parseInt(process.argv[3]);

console.log(add(a, b));