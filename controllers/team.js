import pool from '../data/config.js';
import { sortArrayByPropertyAlphabetically } from '../utils/sortArrayByPropertyAlphabetically.js';

export const getIndexTeam = (req, res) => {
  pool.query(
    `
    SELECT * 
    FROM team
    `,
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      }
      const sortedResult = sortArrayByPropertyAlphabetically(result);

      res.render('pages/team/index', {
        title: 'Teams',
        teams: sortedResult,
        success: req.flash('success'),
        error: req.flash('error'),
      });
    }
  );
};
