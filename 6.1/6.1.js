(function () {
  "use strict";

  const arr = [1, 7, 3, 0, -5, 7, 3, 9];
  const arrayLength = (arr) => {
    let counter = 0;
    for (const element of arr) {
      counter++;
    }
    return counter;
  };

  console.log(arrayLength(arr));

  const arraySum = (arr) => {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum;
  };

  console.log(arraySum(arr));

  const arrayMulti = (arr) => {
    let sumMulti = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      sumMulti *= arr[i + 1];
    }
    return sumMulti;
  };

  console.log(arrayMulti(arr));
})();
