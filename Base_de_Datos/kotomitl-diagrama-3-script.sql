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
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `domicilio` VARCHAR(45) NOT NULL,
  `estado` INT NOT NULL,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`compras` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha_compra` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_entrega` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  `cantidad_total` INT NOT NULL,
  `precio_total` DECIMAL NOT NULL,
  `usuarios_id` BIGINT NOT NULL,
  `estatus_entrega` INT NOT NULL default 0,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_compras_usuarios_idx` (`usuarios_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`admin` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `publico` INT NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `origen` VARCHAR(45) NOT NULL,
  `color` INT NOT NULL,
  `cantidad` INT NULL,
  `talla` INT NULL,
  `materiales` VARCHAR(150) NOT NULL,
  `sugerencia` VARCHAR(150) NOT NULL,
  `adicional` VARCHAR(150) NOT NULL,
  `imagen1` VARCHAR(250) NOT NULL,
  `imagen2` VARCHAR(250) NOT NULL,
  `imagen3` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productos_especificos_has_compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productos_especificos_has_compras` (
  `productos_especificos_id` BIGINT NOT NULL,
  `compras_id` BIGINT NOT NULL,
  `compras_usuarios_id` BIGINT NOT NULL,
  PRIMARY KEY (`productos_especificos_id`, `compras_id`, `compras_usuarios_id`),
  INDEX `fk_productos_especificos_has_compras_compras1_idx` (`compras_id` ASC, `compras_usuarios_id` ASC) VISIBLE,
  INDEX `fk_productos_especificos_has_compras_productos_especificos1_idx` (`productos_especificos_id` ASC) VISIBLE)
ENGINE = InnoDB;

ALTER TABLE kotomitldb.productos ADD sku VARCHAR(45) NOT NULL;

ALTER TABLE kotomitldb.productos MODIFY COLUMN precio DOUBLE; 

ALTER TABLE kotomitldb.compras MODIFY COLUMN precio_total double;
 
ALTER TABLE kotomitldb.compras MODIFY COLUMN fecha_compra VARCHAR(250); 
ALTER TABLE kotomitldb.compras MODIFY COLUMN fecha_entrega VARCHAR(250);

ALTER TABLE kotomitldb.producto ADD tipo VARCHAR(45);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
