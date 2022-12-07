import { isNumInRange } from './isNumInRange.js';

export const validateInputNumber = (
  inputName,
  inputValue,
  minValue,
  maxValue
) => {
  let errors = [];

  if (isNaN(parseFloat(inputValue))) {
    errors.push({
      message: `${inputName} must be a number`,
    });
  }

  if (!isNumInRange(inputValue, minValue, maxValue)) {
    errors.push({
      message: `${inputName} must be greater than ${minValue} and less than ${maxValue}`,
    });
  }

  return errors;
};
