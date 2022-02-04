-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Lut 2022, 11:09
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

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `login` varchar(50) COLLATE cp1250_polish_ci NOT NULL,
  `password` varchar(50) COLLATE cp1250_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250 COLLATE=cp1250_polish_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login` (`login`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
