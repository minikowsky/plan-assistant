-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Lut 2022, 10:43
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `plan_zajec`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `name` text COLLATE cp1250_polish_ci NOT NULL,
  `day` enum('Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela') COLLATE cp1250_polish_ci NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `note` text COLLATE cp1250_polish_ci NOT NULL,
  `login` varchar(50) COLLATE cp1250_polish_ci NOT NULL,
  `color` text COLLATE cp1250_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250 COLLATE=cp1250_polish_ci;

--
-- Zrzut danych tabeli `subject`
--

INSERT INTO `subject` (`id`, `name`, `day`, `start_time`, `end_time`, `note`, `login`, `color`) VALUES
(6, 'Nazwa ', 'Poniedziałek', '08:00:00', '09:30:00', 'Notatka ', 'test ', '#FFFFFF'),
(7, 'Ang', 'Środa', '10:00:00', '12:00:00', 'Test', 'test', '#FFFFFF');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `login` varchar(50) COLLATE cp1250_polish_ci NOT NULL,
  `password` varchar(50) COLLATE cp1250_polish_ci NOT NULL,
  `theme` enum('highContrast','blue','red','green','orange','blackNgold','gray') COLLATE cp1250_polish_ci NOT NULL DEFAULT 'gray'
) ENGINE=InnoDB DEFAULT CHARSET=cp1250 COLLATE=cp1250_polish_ci;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`login`, `password`, `theme`) VALUES
('test', 'test', 'gray'),
('test2', 'test2', 'blue');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--


--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `subject_ibfk_1` FOREIGN KEY (`login`) REFERENCES `user` (`login`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
