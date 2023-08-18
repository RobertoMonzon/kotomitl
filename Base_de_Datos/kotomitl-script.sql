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
-- Table `kotomitldb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`usuario` (
  `usuarioid` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `password` BLOB NOT NULL,
  `direccion_direccionid` INT NOT NULL,
  PRIMARY KEY (`usuarioid`, `direccion_direccionid`),
  INDEX `fk_usuario_direccion1_idx` (`direccion_direccionid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`compra` (
  `compraid` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `fecha` DATE NOT NULL,
  `usuario_usuarioid` INT NOT NULL,
  `usuario_direccion_direccionid` INT NOT NULL,
  PRIMARY KEY (`compraid`, `usuario_usuarioid`, `usuario_direccion_direccionid`),
  INDEX `fk_compra_usuario1_idx` (`usuario_direccion_direccionid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`admin` (
  `adminid` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` BLOB NOT NULL,
  PRIMARY KEY (`adminid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`entrega`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`entrega` (
  `orderid` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `status` ENUM('entregado', 'sin_entregar') NOT NULL,
  `compra_compraid` INT NOT NULL,
  `compra_usuario_usuarioid` INT NOT NULL,
  `compra_usuario_direccion_direccionid` INT NOT NULL,
  PRIMARY KEY (`orderid`, `compra_compraid`, `compra_usuario_usuarioid`, `compra_usuario_direccion_direccionid`),
  INDEX `fk_entrega_compra1_idx` (`compra_compraid` ASC, `compra_usuario_usuarioid` ASC, `compra_usuario_direccion_direccionid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`ProductosGeneral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`ProductosGeneral` (
  `productoid` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `origen` VARCHAR(50) BINARY NOT NULL,
  `materiales` VARCHAR(150) NOT NULL,
  `sugerencia` VARCHAR(150) NOT NULL,
  `adicional` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`productoid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`publico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`publico` (
  `idpublico` INT NOT NULL AUTO_INCREMENT,
  `nombrePublico` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpublico`),
  UNIQUE INDEX `nombrePublico_UNIQUE` (`nombrePublico` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`tallas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`tallas` (
  `tallasid` INT NOT NULL AUTO_INCREMENT,
  `nombreTallas` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tallasid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`Colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`Colores` (
  `colorid` INT NOT NULL AUTO_INCREMENT,
  `nombreColor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`colorid`),
  UNIQUE INDEX `nombreColor_UNIQUE` (`nombreColor` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productoEspecifico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productoEspecifico` (
  `productoEspecificoid` INT NOT NULL AUTO_INCREMENT,
  `precio` DOUBLE NOT NULL,
  `cantidad` INT NOT NULL,
  `imagen` BLOB NOT NULL,
  `publico_idpublico` INT NOT NULL,
  `ProductosGeneral_productoid` INT NOT NULL,
  `tallas_tallasid` INT NOT NULL,
  `Colores_colorid` INT NOT NULL,
  PRIMARY KEY (`productoEspecificoid`, `publico_idpublico`, `ProductosGeneral_productoid`, `tallas_tallasid`, `Colores_colorid`),
  INDEX `fk_productoEspecifico_publico_idx` (`publico_idpublico` ASC) VISIBLE,
  INDEX `fk_productoEspecifico_ProductosGeneral1_idx` (`ProductosGeneral_productoid` ASC) VISIBLE,
  INDEX `fk_productoEspecifico_tallas1_idx` (`tallas_tallasid` ASC) VISIBLE,
  INDEX `fk_productoEspecifico_Colores1_idx` (`Colores_colorid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kotomitldb`.`productoEspecifico_has_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `kotomitldb`.`productoEspecifico_has_compra` (
  `productoEspecifico_productoEspecificoid` INT NOT NULL,
  `productoEspecifico_publico_idpublico` INT NOT NULL,
  `productoEspecifico_ProductosGeneral_productoid` INT NOT NULL,
  `productoEspecifico_tallas_tallasid` INT NOT NULL,
  `productoEspecifico_Colores_colorid` INT NOT NULL,
  `compra_compraid` INT NOT NULL,
  `compra_usuario_usuarioid` INT NOT NULL,
  PRIMARY KEY (`productoEspecifico_productoEspecificoid`, `productoEspecifico_publico_idpublico`, `productoEspecifico_ProductosGeneral_productoid`, `productoEspecifico_tallas_tallasid`, `productoEspecifico_Colores_colorid`, `compra_compraid`, `compra_usuario_usuarioid`),
  INDEX `fk_productoEspecifico_has_compra_compra1_idx` (`compra_compraid` ASC, `compra_usuario_usuarioid` ASC) VISIBLE,
  INDEX `fk_productoEspecifico_has_compra_productoEspecifico1_idx` (`productoEspecifico_productoEspecificoid` ASC, `productoEspecifico_publico_idpublico` ASC, `productoEspecifico_ProductosGeneral_productoid` ASC, `productoEspecifico_tallas_tallasid` ASC, `productoEspecifico_Colores_colorid` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
