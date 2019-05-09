const hello = function () {
  console.log('hello world');
};

const add = function (a, b) {
  hello();
  return a + b;
};

export { add };
