-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Окт 31 2019 г., 13:17
-- Версия сервера: 5.5.25
-- Версия PHP: 5.2.12

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `normaling`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `rank` varchar(30) NOT NULL,
  `avatar_url` varchar(300) NOT NULL,
  `user_photo_names` text CHARACTER SET utf32 NOT NULL,
  `registration_date` varchar(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED AUTO_INCREMENT=8 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `rank`, `avatar_url`, `user_photo_names`, `registration_date`) VALUES
(1, 'Narek', 'vip.hasratyan@mail.ru', '123', 'User', 'User_1/image1572515059404.png', '[]', '08/13/2019'),
(2, 'Valod', 'hjkhjk@mail.ru', '13456', 'User', 'User_2/image1565777414014userid_2.png', '[]', '08/13/2019'),
(7, 'naro12', 'asdasdsad@mail.ru', '123', 'User', 'User_7/image1572516099321.png', '[]', '10/31/2019'),
(5, 'jintonik', 'sadasdas@mail.ru', '1234', 'User', 'User_5/image1565909649367.png', '[]', '08/13/2019'),
(6, 'jani', 'sdasd@mail.ru', '123', 'User', 'User_6/image1565778108292.png', '[]', '08/14/2019');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
