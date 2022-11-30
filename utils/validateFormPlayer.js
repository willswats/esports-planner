import { validateInputString } from './validateInputString.js';

export const validateFormPlayer = (req, res, next) => {
  let errors = [];

  const { name, email } = req.body;

  const inputNameErrors = validateInputString('Name', name, 0, 100);
  const inputEmailErrors = validateInputString('Email', email, 0, 100);

  const valid = inputNameErrors.length <= 0 && inputEmailErrors.length <= 0;

  if (inputNameErrors.length > 0) {
    errors.push(inputNameErrors[0]);
  }

  if (inputEmailErrors.length > 0) {
    errors.push(inputEmailErrors[0]);
  }

  if (!valid) {
    return res.render(`pages/error`, {
      title: 'Error',
      errors: errors,
    });
  } else {
    next();
  }
};
