-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2017 at 04:49 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meechok`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `ser` int(11) NOT NULL,
  `sec` char(2) NOT NULL,
  `number` int(3) NOT NULL,
  `status` set('empty','full') NOT NULL,
  `id_card` varchar(14) NOT NULL,
  `rental` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`ser`, `sec`, `number`, `status`, `id_card`, `rental`) VALUES
(1, 'A', 1, 'empty', '', '0000-00-00'),
(2, 'B', 15, 'full', '1234567890090', '2017-09-04');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id_card` varchar(14) NOT NULL COMMENT 'หมายเลข ปชช',
  `name` varchar(100) NOT NULL COMMENT 'ชื่อ-สกุล',
  `picture` blob NOT NULL,
  `hbd` date DEFAULT NULL COMMENT 'ว/ด/ป เกิด',
  `address` text COMMENT 'ที่อยู่',
  `tel` varchar(11) DEFAULT NULL COMMENT 'เบอร์โทร',
  `email` varchar(50) NOT NULL COMMENT 'เมล',
  `password` varchar(50) NOT NULL COMMENT 'รหัสผ่าน',
  `type` set('admin','d_user','m_user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id_card`, `name`, `picture`, `hbd`, `address`, `tel`, `email`, `password`, `type`) VALUES
('123232', '213132', '', NULL, NULL, '1232312', '12312321', 'f90ee2b31b1a768750cf6c22735905b1', ''),
('12345554323452', 'mini bar', '', NULL, NULL, '0987654321', 'mail@mail.com', 'b83a886a5c437ccd9ac15473fd6f1788', ''),
('1234567890090', 'อนัน อันวา', '', '1990-08-01', 'LA , USA', '0987654321', 'anan@mail.com', '63e62e141c89f160f6b0f2dc14fbefa0', 'm_user'),
('1520500109374', 'ธีมาพร สอนอินทร์', '', '1995-08-10', 'Ngao , Lampang Thailand 52110', '0946523015', 'teemaporn.344@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`ser`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id_card`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `ser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
