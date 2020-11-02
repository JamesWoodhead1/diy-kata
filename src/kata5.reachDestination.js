const reachDestination = (distance, speed) => {
  function roundHalf(num) {
    return Math.round(num * 2) / 2;
  }
  return `I should reach my destination in ${roundHalf(
    distance / speed
  )} hours`;
};

module.exports = reachDestination;
