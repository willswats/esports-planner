const isEmpty = (value) => {
  if (value.trim() === '') {
    return true;
  }
  return false;
};

const setFormError = (borderElement, errorElement, errorText) => {
  borderElement.classList += ' border-danger';
  errorElement.textContent = errorText;
};

const removeFormError = (borderElement, errorElement) => {
  borderElement.classList.remove('border-danger');
  errorElement.textContent = '';
};
