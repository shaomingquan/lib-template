(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (global = global || self, factory(global.DEMO = {}));
}(this, (exports) => {
  const hello = function () {
    console.log('hello world');
  };

  const add = function (a, b) {
    hello();
    return a + b;
  };

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });
}));
