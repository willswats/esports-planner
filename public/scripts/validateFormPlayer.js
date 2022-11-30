const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const pErrorName = document.getElementById('p-error-name');
const pErrorEmail = document.getElementById('p-error-email');

const validateFormPlayer = () => {
  const inputNameErrors = validateInputString('Name', inputName.value, 0, 100);
  const inputEmailErrors = validateInputString(
    'Email',
    inputEmail.value,
    0,
    100
  );

  const valid = inputNameErrors.length <= 0 && inputEmailErrors.length <= 0;

  if (inputNameErrors.length > 0) {
    setFormError(inputName, pErrorName, inputNameErrors[0].message);
  } else {
    removeFormError(inputName, pErrorName);
  }

  if (inputEmailErrors.length > 0) {
    setFormError(inputEmail, pErrorEmail, inputEmailErrors[0].message);
  } else {
    removeFormError(inputEmail, pErrorEmail);
  }

  if (!valid) {
    return false;
  }

  return true;
};
