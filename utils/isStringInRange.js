export const isStringInRange = (string, minLength, maxLength) => {
  if (string.length <= minLength || string.length >= maxLength) {
    return false;
  }
  return true;
};
