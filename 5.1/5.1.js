(function () {
  "use strict";

  function countryToLiveIn(language, isIsland, population, country) {
    if (
      language == "English" &&
      isIsland == false &&
      population < 50000000 &&
      country == "England"
    )
      return `You should live in ${country}`;
    else return `${country} does not meet your criteria`;
  }

  console.log(countryToLiveIn("English", false, 30000000, "England"));
})();
