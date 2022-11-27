import { validateInputString } from './validateInputString.js';
import { validateInputNumber } from './validateInputNumber.js';

export const validateFormGame = (req, res, next) => {
  let errors = [];

  const { name, duration, team_size } = req.body;

  const inputNameErrors = validateInputString('Name', name, 0, 100);
  const inputDurationErrors = validateInputNumber(
    'Duration',
    duration,
    0,
    1000
  );
  const inputTeamSizeErrors = validateInputNumber(
    'Team size',
    team_size,
    0,
    1000
  );

  const valid =
    inputNameErrors.length <= 0 &&
    inputDurationErrors.length <= 0 &&
    inputTeamSizeErrors.length <= 0;

  if (inputNameErrors.length > 0) {
    errors.push(inputNameErrors[0]);
  }

  if (inputDurationErrors.length > 0) {
    errors.push(inputDurationErrors[0]);
  }

  if (inputTeamSizeErrors.length > 0) {
    errors.push(inputTeamSizeErrors[0]);
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
