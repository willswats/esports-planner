const isStringInRange = (string, minLength, maxLength) => {
  if (string.length <= minLength || string.length >= maxLength) {
    return false;
  }
  return true;
};

const isNumInRange = (num, minNum, maxNum) => {
  if (num <= minNum || num >= maxNum) {
    return false;
  }
  return true;
};

const validateInputString = (inputName, inputString, minLength, maxLength) => {
  let errors = [];

  if (!isStringInRange(inputString, minLength, maxLength)) {
    errors.push({
      message: `${inputName} must be greater than ${minLength} and less than ${maxLength} in length`,
    });
  }

  return errors;
};

const validateInputNumber = (inputName, inputValue, minValue, maxValue) => {
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

const setFormError = (borderElement, errorTextElement, errorText) => {
  borderElement.classList += ' border-danger';
  errorTextElement.textContent = errorText;
};

const removeFormError = (borderElement, errorTextElement) => {
  borderElement.classList.remove('border-danger');
  errorTextElement.textContent = '';
};
