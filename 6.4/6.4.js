(function () {
  "use strict";
  const populations = [1439323776, 331002651, 46754778, 32971854];

  function percentageOfWorld(population) {
    const worldPopulation = 7900000000;
    return ((population * 100) / worldPopulation).toFixed(2);
  }

  const populationPercentages = () => {
    const percentages = [];
    for (let i = 0; i < populations.length; i++) {
      percentages[i] = percentageOfWorld(populations[i]);
    }
    return percentages;
  };
  console.log(populationPercentages());
})();
