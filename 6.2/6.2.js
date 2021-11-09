(function () {
  "use strict";
  const people = ["Greg", "Mary", "Devon", "James"];
  const arrayFunc = (people) => {
    for (const i of people) {
      console.log(i);
    }
    people.shift();
    people.pop();
    people.unshift("Matt");
    people.push("Yarden");

    for (const i of people) {
      console.log(i);
      if (i === "Mary") break;
    }

    [...people].slice(2, 4);
    people.indexOf("Mary");
    people.indexOf("foo");
    people = ["Greg", "Mary", "Devon", "James"];
    people.splice(2, 1, "Elizabeth", "Artie");
    people = ["Greg", "Mary", "Devon", "James"];
    const withBob = people.concat(["Bob"]);
    console.log(withBob);
  };

  console.log(arrayFunc(people));
})();
