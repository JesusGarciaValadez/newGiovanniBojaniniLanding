-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-03-2014 a las 18:19:15
-- Versión del servidor: 5.5.34-cll-lve
-- Versión de PHP: 5.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `microinjertoB0j4nini`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `budget_request`
--

CREATE TABLE IF NOT EXISTS `budget_request` (
  `id_budget` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `budget_name` varchar(140) NOT NULL,
  `budget_phone` varchar(140) NOT NULL,
  `budget_mail` varchar(140) NOT NULL,
  `type` varchar(140) NOT NULL,
  `date_request` date NOT NULL,
  PRIMARY KEY (`id_budget`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=47 ;

--
-- Volcado de datos para la tabla `budget_request`
--

INSERT INTO `budget_request` (`id_budget`, `budget_name`, `budget_phone`, `budget_mail`, `type`, `date_request`) VALUES
(1, 'jesus', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(2, 'jesus', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(3, 'jesus', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(4, 'jesus', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(5, 'Vico', '5530982950', 'prueba@mail.com', '1', '2014-02-27'),
(6, 'jesus', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(7, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(8, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-02-27'),
(9, 'vico', '55530983920', 'prueba@mail.com', '1', '2014-02-27'),
(10, 'paola', '55555', 'prueba@prueba.com', '1', '2014-02-27'),
(11, 'paola', '55555', 'prueba@prueba.com', '1', '2014-02-27'),
(12, 'carla alverde', '5513097011', 'alverdecarla@yahoo.com', '1', '2014-03-20'),
(13, 'Luis Garrido', '5514661031', 'catluis@itelcel.com', '1', '2014-03-20'),
(14, 'Miguel Alejos', '30982960', 'mike.aryan@hotmail.com', '1', '2014-03-20'),
(15, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-20'),
(16, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-20'),
(17, 'Rodrigo Jiménez Salgador', '21675210', 'rjimenez@cdgb.com.mx', '1', '2014-03-21'),
(18, 'Jesús Antoni. ', '(55) 5214 3568', 'zerovamp@hotmail.com', '1', '2014-03-21'),
(19, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-21'),
(20, 'Vico', '30982973', 'vdavila@cmv.com.mx', '1', '2014-03-21'),
(21, 'Prueba', '30982950', 'prueba@prueba.com', '1', '2014-03-21'),
(22, 'juan paulo', '4771208730', 'jpaulosave@hotmail.com', '1', '2014-03-21'),
(23, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-21'),
(24, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-23'),
(25, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-23'),
(26, 'Jesus Aguirre', '6311119127', 'alejandroaguirre7@hotmail.com', '1', '2014-03-23'),
(27, 'luis', '5514661031', 'catluis@itelcel.com', '1', '2014-03-25'),
(28, 'luis', '5514661031', 'catluis@itelcel.com', '1', '2014-03-25'),
(29, 'luis', '5514661031', 'catluis@itelcel.com', '1', '2014-03-25'),
(30, 'luis', '5514661031', 'catluis@itelcel.com', '1', '2014-03-25'),
(31, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-25'),
(32, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-25'),
(33, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-25'),
(34, 'Victor', '5530982050', 'prueba@prueba.com', '1', '2014-03-25'),
(35, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-25'),
(36, 'Jesús', '55555555', 'jgarcia@cmvasfalto.com.mx', '1', '2014-03-25'),
(37, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '3V', '2014-03-25'),
(38, 'CMV Asfalto', '55555555', 'jgarcia@cmvasfalto.com.mx', '4', '2014-03-25'),
(39, 'Prueba', '30982930', 'prueba@rueba.com', '5', '2014-03-25'),
(40, 'Prueba', '30982950', 'prueba@prueba.com', '3', '2014-03-25'),
(41, 'paola', '55555555', 'prueba@prueba.com', '1', '2014-03-25'),
(42, 'vico', '559059090', 'prueba@prueba.com', '5', '2014-03-25'),
(43, 'mauricio ', '5516771633', 'mdgomez@aim-ti.com', '3', '2014-03-25'),
(44, 'Vico', '5515802951', 'prueba@prueba.com', '1', '2014-03-26'),
(45, 'Erick Carrillo Werring', '473-652-1092', 'erick.carrillo@yahoo.com', '3', '2014-03-26'),
(46, 'Rodrigo Jiménez', 'XXXXXXXXX', 'rjimenez@cdgb.com.mx', '1', '2014-03-26');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
