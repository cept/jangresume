-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jangresume
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jangresume
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jangresume` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jangresume` ;

-- -----------------------------------------------------
-- Table `jangresume`.`resume`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jangresume`.`resume` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nama_lengkap` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `no_hp` VARCHAR(20) NULL DEFAULT NULL,
  `headline` VARCHAR(255) NULL DEFAULT NULL,
  `alamat` VARCHAR(255) NULL DEFAULT NULL,
  `summary` TEXT NULL DEFAULT NULL,
  `experience` TEXT NULL DEFAULT NULL,
  `education` TEXT NULL DEFAULT NULL,
  `skills` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
