const inputName = document.getElementById('input-name');
const inputDuration = document.getElementById('input-duration');
const inputTeamSize = document.getElementById('input-team-size');
const pErrorName = document.getElementById('p-error-name');
const pErrorDuration = document.getElementById('p-error-duration');
const pErrorTeamSize = document.getElementById('p-error-team-size');

const validateFormGame = () => {
  let valid = {
    inputName: false,
    inputDuration: false,
    inputTeamSize: false,
  };

  if (isEmpty(inputName.value)) {
    valid.inputName = false;
    setFormError(
      inputName,
      pErrorName,
      'Name must be greater than one character.'
    );
  } else {
    valid.inputName = true;
    removeFormError(inputName, pErrorName);
  }

  if (isEmpty(inputDuration.value)) {
    valid.inputDuration = false;
    setFormError(
      inputDuration,
      pErrorDuration,
      'Duration must be greater than one character.'
    );
  } else {
    valid.inputDuration = true;
    removeFormError(inputDuration, pErrorDuration);
  }

  if (isEmpty(inputTeamSize.value)) {
    valid.inputTeamSize = false;
    setFormError(
      inputTeamSize,
      pErrorTeamSize,
      'Country must be greater than one character.'
    );
  } else {
    valid.inputTeamSize = true;
    removeFormError(inputTeamSize, pErrorTeamSize);
  }

  if (!valid.inputName || !valid.inputDuration || !valid.inputTeamSize) {
    return false;
  }

  return true;
};
