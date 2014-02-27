SET NAMES 'utf8';

SET CHARACTER SET 'utf8';

CREATE DATABASE IF NOT EXISTS `microinjertoB0j4nini`;

CREATE TABLE IF NOT EXISTS `budget_request` 
( id_budget SMALLINT UNSIGNED AUTO_INCREMENT, 
  budget_name VARCHAR( 140 ) NOT NULL,
  budget_phone VARCHAR( 140 ) NOT NULL, 
  budget_mail VARCHAR( 140 ) NOT NULL, 
  type VARCHAR( 140 ) NOT NULL, 
  date_request DATE NOT NULL, 
  CONSTRAINT pk_budget PRIMARY KEY ( id_budget ) 
) ENGINE = InnoDB DEFAULT CHARSET = 'utf8';