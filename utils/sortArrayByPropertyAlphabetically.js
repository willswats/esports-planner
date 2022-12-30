// This is a modified version of the answer here: https://stackoverflow.com/a/8900824
export const sortArrayByPropertyAlphabetically = (array) => {
  let newArray = array;
  newArray.sort((a, b) => {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return newArray;
};
