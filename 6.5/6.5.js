(function () {
  "use strict";
  const filledArray = new Array(100).fill("hello");
  const countingArr = Array.from({ length: 100 }, (_, i) => i + 1);
  const someObj = { 0: "hello", 1: "world" };
  const objectToArrOnlyValues = Object.values(someObj);
  const arrToObj = Object.assign({}, ["a", "b", "c"]);
  const isArray = Array.isArray(objectToArrOnlyValues);
  const copyArrWontEffect = [...objectToArrOnlyValues];
  const copyArrEffect = objectToArrOnlyValues;
})();
