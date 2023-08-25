-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema kotomitldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema kotomitldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `kotomitldb` DEFAULT CHARACTER SET utf8 ;
USE `kotomitldb` ;

-- -----------------------------------------------------
-- Table `kotomitldb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` BLOB NOT NULL,
  `domicilio` VARCHAR(45) NOT NULL,
  `estado` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(45) NOT NULL,
  `fecha_compra` DATE NOT NULL,
  `fecha_entrega` DATE NULL,
  `cantidad_total` INT NOT NULL,
  `precio_total` DECIMAL NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_compras_usuarios_idx` (`usuarios_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` BLOB NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`direccion` (
  `direccionid` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `cp` INT(45) NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`direccionid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productos_generales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productos_generales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `origen` VARCHAR(50) BINARY NOT NULL,
  `materiales` VARCHAR(150) NOT NULL,
  `sugerencia` VARCHAR(150) NOT NULL,
  `adicional` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productos_especificos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productos_especificos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `precio` DECIMAL NOT NULL,
  `cantidad_stock` INT NOT NULL,
  `imagen` BLOB NOT NULL,
  `talla` INT NOT NULL,
  `publico` INT NOT NULL,
  `color` INT NOT NULL,
  `productos_generales_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_generales_id`),
  INDEX `fk_productos_especificos_productos_generales1_idx` (`productos_generales_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productos_especificos_has_compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productos_especificos_has_compras` (
  `productos_especificos_id` INT NOT NULL,
  `productos_especificos_productos_generales_id` INT NOT NULL,
  `compras_id` INT NOT NULL,
  `compras_usuarios_id` INT NOT NULL,
  PRIMARY KEY (`productos_especificos_id`, `productos_especificos_productos_generales_id`, `compras_id`, `compras_usuarios_id`),
  INDEX `fk_productos_especificos_has_compras_compras1_idx` (`compras_id` ASC, `compras_usuarios_id` ASC) VISIBLE,
  INDEX `fk_productos_especificos_has_compras_productos_especificos1_idx` (`productos_especificos_id` ASC, `productos_especificos_productos_generales_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
