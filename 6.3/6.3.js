(function () {
  "use strict";
  const strFunc = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      for (let j = 0; j < arr[i].length; j++) {
        counter++;
      }
      newArr[i] = counter;
    }
    return newArr;
  };

  console.log(strFunc(["boo", "doooo", "hoo", "ro"]));
})();
