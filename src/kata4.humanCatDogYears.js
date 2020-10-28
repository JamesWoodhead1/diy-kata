const humanCatDogYears = number => {
  if (number === 1) {
    return [number, number + 14, number + 14];
  }
  if (number === 2) {
    return [number, number + 22, number + 22];
  }
  return [number, 24 + 4 * (number - 2), 24 + 5 * (number - 2)];
};

module.exports = humanCatDogYears;
