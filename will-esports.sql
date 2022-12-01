-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema will-esports
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema will-esports
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `will-esports` DEFAULT CHARACTER SET utf8mb3 ;
USE `will-esports` ;

-- -----------------------------------------------------
-- Table `will-esports`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`country` (
  `country_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`country_id`),
  UNIQUE INDEX `country_id_UNIQUE` (`country_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`city` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `country_id` INT NOT NULL,
  PRIMARY KEY (`city_id`),
  UNIQUE INDEX `city_id_UNIQUE` (`city_id` ASC) VISIBLE,
  UNIQUE INDEX `country_id_UNIQUE` (`country_id` ASC) VISIBLE,
  INDEX `country_id_idx` (`country_id` ASC) VISIBLE,
  CONSTRAINT `fk_country_id`
    FOREIGN KEY (`country_id`)
    REFERENCES `will-esports`.`country` (`country_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`game` (
  `game_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `duration` INT NOT NULL,
  `team_size` INT NOT NULL,
  PRIMARY KEY (`game_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 55
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`championship`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`championship` (
  `championship_id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `year` YEAR NOT NULL,
  `city_id` INT NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `number_of_teams` INT NOT NULL,
  `number_of_matches` INT NOT NULL,
  PRIMARY KEY (`championship_id`),
  UNIQUE INDEX `championship_id_UNIQUE` (`championship_id` ASC) VISIBLE,
  INDEX `idchampionshipgame_idx` (`game_id` ASC) VISIBLE,
  INDEX `city_id_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_championship_city`
    FOREIGN KEY (`city_id`)
    REFERENCES `will-esports`.`city` (`city_id`),
  CONSTRAINT `fk_championship_game`
    FOREIGN KEY (`game_id`)
    REFERENCES `will-esports`.`game` (`game_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`team` (
  `team_id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`team_id`),
  INDEX `game_id_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_game_id`
    FOREIGN KEY (`game_id`)
    REFERENCES `will-esports`.`game` (`game_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`championshipentry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`championshipentry` (
  `team_id` INT NOT NULL,
  `championship_id` INT NOT NULL,
  PRIMARY KEY (`team_id`, `championship_id`),
  INDEX `idchampionshipentry_idx` (`championship_id` ASC) VISIBLE,
  INDEX `idchampionshipteam_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_championship_entry_id`
    FOREIGN KEY (`championship_id`)
    REFERENCES `will-esports`.`championship` (`championship_id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_championship_entry_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `will-esports`.`team` (`team_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`player` (
  `player_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`player_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`gamespecialisation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`gamespecialisation` (
  `player_id` INT NOT NULL,
  `game_id` INT NOT NULL,
  PRIMARY KEY (`player_id`, `game_id`),
  INDEX `idplayer_idx` (`player_id` ASC) VISIBLE,
  INDEX `idgamespecialisation_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `fk_game_specialisation_id`
    FOREIGN KEY (`game_id`)
    REFERENCES `will-esports`.`game` (`game_id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_player_game_specialisation_id`
    FOREIGN KEY (`player_id`)
    REFERENCES `will-esports`.`player` (`player_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`match`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`match` (
  `match_id` INT NOT NULL,
  `championship_id` INT NOT NULL,
  `matchdate` DATE NOT NULL,
  PRIMARY KEY (`match_id`),
  UNIQUE INDEX `match_id_UNIQUE` (`match_id` ASC) VISIBLE,
  INDEX `idchampionship_idx` (`championship_id` ASC) VISIBLE,
  CONSTRAINT `fk_match_championship_id`
    FOREIGN KEY (`championship_id`)
    REFERENCES `will-esports`.`championship` (`championship_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`matchcompetitor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`matchcompetitor` (
  `match_competitor_id` INT NOT NULL AUTO_INCREMENT,
  `match_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `points` INT NULL DEFAULT NULL,
  PRIMARY KEY (`match_competitor_id`),
  UNIQUE INDEX `match_competitor_id_UNIQUE` (`match_competitor_id` ASC) VISIBLE,
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  INDEX `fk_competitor_match_id` (`match_id` ASC) VISIBLE,
  CONSTRAINT `fk_competitor_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `will-esports`.`match` (`match_id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_competitor_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `will-esports`.`team` (`team_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `will-esports`.`teammember`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `will-esports`.`teammember` (
  `player_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`player_id`, `team_id`),
  INDEX `idplayer_idx` (`player_id` ASC) VISIBLE,
  INDEX `idteam_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_member_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `will-esports`.`team` (`team_id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_team_player_id`
    FOREIGN KEY (`player_id`)
    REFERENCES `will-esports`.`player` (`player_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
