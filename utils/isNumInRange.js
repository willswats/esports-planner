export const isNumInRange = (num, minNum, maxNum) => {
  if (num <= minNum || num >= maxNum) {
    return false;
  }
  return true;
};
