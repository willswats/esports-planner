import pool from '../data/config.js';

export const getIndexPlayer = (req, res) => {
  pool.query(
    `
  SELECT * 
  FROM player
  `,
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      }
      res.render('pages/player/index', {
        title: 'Players',
        players: result,
        success: req.flash('success'),
        error: req.flash('error'),
      });
    }
  );
};

export const getAddPlayer = (req, res) => {
  pool.query(
    `
    SELECT *
    FROM game
    `,
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      }
      res.render('pages/player/add', {
        title: 'Add Player',
        games: result,
      });
    }
  );
};

export const postAddPlayer = (req, res) => {
  const { name, email } = req.body;
  let { game_id } = req.body;

  pool.query(
    `
    INSERT INTO player 
    SET ?
    `,
    {
      name,
      email,
    },
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      } else {
        let gameIdsInsert = [];

        // If game_id is not an array, insert it's value into an array
        if (typeof game_id !== 'object') {
          game_id = [game_id];
        }

        for (let i = 0; i < game_id.length; i++) {
          gameIdsInsert.push([result.insertId, game_id[i]]);
        }

        pool.query(
          `
          INSERT INTO
          gamespecialisation (player_id, game_id) 
          VALUES ?
          `,
          [gameIdsInsert],
          (error) => {
            if (error) {
              req.flash('error', 'Something went wrong');
            } else {
              req.flash('success', 'Added player');
            }
          }
        );
      }
      res.redirect('/players');
    }
  );
};

export const getShowPlayer = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
    SELECT * 
    FROM player 
    WHERE player_id = ?;
    SELECT *
    FROM gamespecialisation
    WHERE player_id =  ?;
    SELECT *
    FROM game
    `,
    [id, id],
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      }
      res.render('pages/player/show', {
        id,
        title: result !== undefined ? result[0].name : 'Error',
        player: result[0][0],
        gamespecialisations: result[1],
        games: result[2],
        success: req.flash('success'),
        error: req.flash('error'),
      });
    }
  );
};

export const getEditPlayer = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
    SELECT * 
    FROM player 
    WHERE player_id = ?;
    SELECT *
    FROM gamespecialisation
    WHERE player_id =  ?;
    SELECT *
    FROM game
    `,
    [id, id],
    (error, result) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      }
      res.render('pages/player/edit', {
        id,
        title: result.length > 0 ? result[0].name : 'Error',
        player: result[0][0],
        gamespecialisations: result[1],
        games: result[2],
      });
    }
  );
};

export const postEditPlayer = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  let { game_id } = req.body;

  let gameIdsInsert = [];

  // If game_id is not an array, insert it's value into an array
  if (typeof game_id !== 'object') {
    game_id = [game_id];
  }

  for (let i = 0; i < game_id.length; i++) {
    gameIdsInsert.push([id, game_id[i]]);
  }

  if (game_id[0] !== undefined) {
    pool.query(
      `
    UPDATE player 
    SET ? 
    WHERE player_id = ?;
    DELETE FROM gamespecialisation 
    WHERE player_id = ?;
    INSERT INTO
    gamespecialisation (player_id, game_id) 
    VALUES ?;
  `,
      [{ name, email }, id, id, gameIdsInsert],
      (error) => {
        if (error) {
          console.log(error);
          req.flash('error', 'Something went wrong');
        } else {
          req.flash('success', 'Edited player');
        }
        res.redirect(`/players/${id}`);
      }
    );
  } else {
    pool.query(
      `
    UPDATE player 
    SET ? 
    WHERE player_id = ?;
    DELETE FROM gamespecialisation 
    WHERE player_id = ?;
  `,
      [{ name, email }, id, id],
      (error) => {
        if (error) {
          console.log(error);
          req.flash('error', 'Something went wrong');
        } else {
          req.flash('success', 'Edited player');
        }
        res.redirect(`/players/${id}`);
      }
    );
  }
};

export const postDeletePlayer = (req, res) => {
  const { id } = req.params;

  pool.query(
    `
  DELETE FROM player 
  WHERE player_id = ?
  `,
    id,
    (error) => {
      if (error) {
        req.flash('error', 'Something went wrong');
      } else {
        req.flash('success', 'Deleted player');
      }
      res.redirect(`/players`);
    }
  );
};
