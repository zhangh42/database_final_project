CREATE TABLE `shoppingmanagement`.`employee` (
  `E_id` INT NOT NULL,
  `E_name` VARCHAR(20) NOT NULL,
  `E_sex` VARCHAR(1) NOT NULL,
  `E_age` INT NOT NULL,
  `E_phone` CHAR(11) NULL DEFAULT NULL,
  `E_date` DATE NULL,
  `E_salary` DECIMAL(10,2) NULL,
  PRIMARY KEY (`E_id`),
  UNIQUE INDEX `E_id_UNIQUE` (`E_id` ASC))
ENGINE = InnoDB;