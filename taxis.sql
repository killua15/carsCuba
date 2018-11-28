SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `car_tax`;

CREATE DATABASE `car_tax`
   CHARACTER SET 'latin1'
   COLLATE 'latin1_swedish_ci';

USE `car_tax`;



CREATE TABLE `owner_car_tax` (
 `id_owner_car_tax` int(11) NOT NULL AUTO_INCREMENT,
 `owner_name` varchar(40) NOT NULL,
 `identification` varchar(11) NOT NULL,
 `address` text NOT NULL,
 `phone` text NOT NULL,
 `email` text NOT NULL,
 PRIMARY KEY (`id_owner_car_tax`),
 UNIQUE KEY `identification` (`identification`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;



CREATE TABLE `car` (
 `id_car` int(11) NOT NULL AUTO_INCREMENT,
 `pictures` text NOT NULL,
 `plate` varchar(10) NOT NULL,
 `model` varchar(40) NOT NULL,
 `price` double(18,0) NOT NULL,
 `car_code` varchar(15) NOT NULL,
 `id_owner_car_tax` int(11) NOT NULL,
 `confort` text NOT NULL,
 PRIMARY KEY (`id_car`),
 UNIQUE KEY `plate` (`plate`),
 KEY `Ref11` (`id_owner_car_tax`),
 CONSTRAINT `Refowner_car_tax1` FOREIGN KEY (`id_owner_car_tax`) REFERENCES `owner_car_tax` (`id_owner_car_tax`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE `run_type` (
 `id_run_type` int(11) NOT NULL AUTO_INCREMENT,
 `run_type_name` varchar(40) NOT NULL,
 PRIMARY KEY (`id_run_type`),
 UNIQUE KEY `run_type_name` (`run_type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;



CREATE TABLE `run` (
 `id_run` int(11) NOT NULL AUTO_INCREMENT,
 `run_code` varchar(14) NOT NULL,
 `run_price` double(18,0) NOT NULL,
 `id_run_type` int(11) NOT NULL,
 `id_car` int(11) NOT NULL,
 PRIMARY KEY (`id_run`),
 UNIQUE KEY `run_code` (`run_code`),
 UNIQUE KEY `run_code_2` (`run_code`),
 KEY `Ref32` (`id_run_type`),
 KEY `Ref24` (`id_car`),
 CONSTRAINT `Refcar4` FOREIGN KEY (`id_car`) REFERENCES `car` (`id_car`),