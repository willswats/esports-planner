// Convert a value to an array that is insertable within a SQL INSERT statement
export const convertToInsertableArray = (convertId, convertValue) => {
  let newArray = [];

  // Converts convertValue to an array if it is not one (convertValue could be an array or a single value)
  if (typeof convertValue !== 'object') {
    convertValue = [convertValue];
  }

  for (let i = 0; i < convertValue.length; i++) {
    newArray.push([convertId, convertValue[i]]);
  }

  return newArray;
};
