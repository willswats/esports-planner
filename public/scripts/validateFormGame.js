const inputName = document.getElementById('input-name');
const inputDuration = document.getElementById('input-duration');
const inputTeamSize = document.getElementById('input-team-size');
const pErrorName = document.getElementById('p-error-name');
const pErrorDuration = document.getElementById('p-error-duration');
const pErrorTeamSize = document.getElementById('p-error-team-size');

const validateFormGame = () => {
  const inputNameErrors = validateInputString('Name', inputName.value, 0, 100);
  const inputDurationErrors = validateInputNumber(
    'Duration',
    inputDuration.value,
    0,
    1000
  );
  const inputTeamSizeErrors = validateInputNumber(
    'Team size',
    inputTeamSize.value,
    0,
    1000
  );

  const valid =
    inputNameErrors.length <= 0 &&
    inputDurationErrors.length <= 0 &&
    inputTeamSizeErrors.length <= 0;

  if (inputNameErrors.length > 0) {
    setFormError(inputName, pErrorName, inputNameErrors[0].message);
  } else {
    removeFormError(inputName, pErrorName);
  }

  if (inputDurationErrors.length > 0) {
    setFormError(inputDuration, pErrorDuration, inputDurationErrors[0].message);
  } else {
    removeFormError(inputDuration, pErrorDuration);
  }

  if (inputTeamSizeErrors.length > 0) {
    setFormError(inputTeamSize, pErrorTeamSize, inputTeamSizeErrors[0].message);
  } else {
    removeFormError(inputTeamSize, pErrorTeamSize);
  }

  if (!valid) {
    return false;
  }

  return true;
};
