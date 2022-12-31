import pool from '../data/config.js';
import { sortArrayByPropertyAlphabetically } from '../utils/sortArrayByPropertyAlphabetically.js';

export const getIndexGame = (req, res) => {
  let games = [];

  pool.query(
    `
  SELECT * 
  FROM game
  `,
    (error, result) => {
      if (error) {
        req.flash('error', 'Failed to get games');
      } else {
        games = sortArrayByPropertyAlphabetically(result);
      }

      res.render('pages/game/index', {
        title: 'Games',
        games,
        success: req.flash('success'),
        error: req.flash('error'),
      });
    }
  );
};

export const getAddGame = (req, res) => {
  res.render('pages/game/add', {
    title: 'Add Game',
  });
};

export const postAddGame = (req, res) => {
  const { name, duration, team_size } = req.body;

  pool.query(
    `
    INSERT INTO game 
    SET ?
    `,
    {
      name,
      duration,
      team_size,
    },
    (error) => {
      if (error) {
        req.flash('error', 'Failed to add game');
      } else {
        req.flash('success', 'Added game');
      }
      res.redirect('/games');
    }
  );
};

export const getShowGame = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
    SELECT * 
    FROM game 
    WHERE game_id = ?
    `,
    id,
    (error, result) => {
      if (error) {
        req.flash('error', 'Failed to display show page for game');
        res.redirect('/games');
      } else {
        res.render('pages/game/show', {
          id,
          title: result[0].name,
          game: result[0],
          success: req.flash('success'),
          error: req.flash('error'),
        });
      }
    }
  );
};

export const getEditGame = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
    SELECT * 
    FROM game 
    WHERE game_id = ?
    `,
    id,
    (error, result) => {
      if (error) {
        req.flash('error', 'Failed to display edit page for game');
        res.redirect('/games');
      } else {
        res.render('pages/game/edit', {
          id,
          title: result[0].name,
          game: result[0],
        });
      }
    }
  );
};

export const postEditGame = (req, res) => {
  const { id } = req.params;
  const { name, duration, team_size } = req.body;

  pool.query(
    `
    UPDATE game 
    SET ? 
    WHERE game_id = ?
  `,
    [{ name, duration, team_size }, id],
    (error) => {
      if (error) {
        req.flash('error', 'Failed to edit game');
      } else {
        req.flash('success', 'Edited game');
      }
      res.redirect(`/games/${id}`);
    }
  );
};

export const postDeleteGame = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
  DELETE FROM game 
  WHERE game_id = ?
  `,
    id,
    (error) => {
      if (error) {
        req.flash('error', 'Failed to delete game');
      } else {
        req.flash('success', 'Deleted game');
      }
      res.redirect(`/games`);
    }
  );
};
