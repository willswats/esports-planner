import { isEmpty } from './isEmpty.js';

export const validateFormGame = (req, res, next) => {
  let errors = [];

  const { name, duration, team_size } = req.body;

  if (isEmpty(name)) {
    errors.push('Name must be greater than one character.');
  }

  if (isEmpty(duration)) {
    errors.push('Duration must be greater than one character.');
  }

  if (isEmpty(team_size)) {
    errors.push('Team size must be greater than one character.');
  }

  if (errors.length > 0) {
    return res.render(`pages/error`, {
      title: 'Error',
      errors: errors,
    });
  } else {
    next();
  }
};
