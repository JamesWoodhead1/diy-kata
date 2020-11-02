const joinNames = namesObj => {
  const newString = namesObj
    .map(function(obj) {
      return obj.name;
    })
    .join(", ");

  const lastComma = newString.lastIndexOf(", ");
  const otherChar = " &";
  const finalString =
    newString.slice(0, lastComma) + otherChar + newString.slice(lastComma + 1);

  return finalString;
};

module.exports = joinNames;
