export const sortArrayByPropertyAlphabetically = (array) => {
  return array.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });
};
