import { isStringInRange } from './isStringInRange.js';

export const validateInputString = (
  inputName,
  inputString,
  minLength,
  maxLength
) => {
  let errors = [];

  if (!isStringInRange(inputString, minLength, maxLength)) {
    errors.push({
      message: `${inputName} must be greater than ${minLength} and less than ${maxLength} in length`,
    });
  }

  return errors;
};
