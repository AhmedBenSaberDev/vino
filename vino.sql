-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 12 oct. 2021 à 14:44
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `vino`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `name`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_number` int(11) NOT NULL,
  `order_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`order_details`)),
  `created_at` datetime NOT NULL,
  `shipped_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `ProductName` varchar(50) NOT NULL,
  `ProductDescription` varchar(255) NOT NULL,
  `Price` int(11) NOT NULL,
  `Picture` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`Id`, `ProductName`, `ProductDescription`, `Price`, `Picture`, `year`, `created_at`, `updated_at`) VALUES
(4, 'PETIT VERDOT', 'Our estate Margarita Vineyard enjoys optimal growing conditions for Petit Verdot, resulting in a wine with intense color, racy flavors and fresh natural acidity. With the 2017 vintage, we selected a dozen exemplary barrels to offer a rare showcase for thi', 40, 'PETIT_VERDOT.jpg', 2017, NULL, '2021-08-01 20:15:10'),
(5, 'CABERNET FRANC', 'The 2016 Cabernet Franc is a limited release that comes from Block 9 along the Oyster Ridge section of our estate Margarita Vineyard, where profound calcareous soils and a northeasterly exposure combine to yield a Cabernet Franc with a vivid sense of plac', 50, 'CABERNET_FRANC.png', 2016, NULL, NULL),
(6, 'OYSTER RIDGE MAGNUM', 'Each year, we craft the limited-edition Oyster Ridge cuvée to exemplify our finest winemaking efforts. The name Oyster Ridge honors an outcropping that always astonishes visitors to our estate Margarita Vineyard. Here, large white oyster fossils are liter', 140, 'OYSTER_RIDGE_MAGNUM.jpg', 2016, NULL, NULL),
(7, 'PEARL CHARDONNAY', 'This limited-edition Chardonnay belongs to our Pearl Collection, which is dedicated to small-lot wines that represent our finest winemaking efforts. Our estate Margarita Vineyard is situated in the coolest area of Paso Robles, providing ideal conditions f', 32, 'PEARL_CHARDONNAY.png', 2018, NULL, NULL),
(8, 'RENEGADE', 'The 2017 Renegade comes from our estate Margarita Vineyard on the historic Santa Margarita Ranch. From missionaries to gunslingers, roughriders to outlaws, a colorful cast of characters has traversed the ranch’s rugged terrain since the 18th century. In t', 26, 'RENEGADE.png', 2017, NULL, NULL),
(9, 'PINOT NOIR', '', 32, 'PINOT_NOIR.png', 2018, NULL, NULL),
(10, 'CABERNET SAUVIGNON', '', 22, 'CABERNET_SAUVIGNON.jpg', 2019, NULL, NULL),
(11, 'ROSÉ FRANC', 'We present the 2020 Rosé as a limited release for the spring and summer season. Modeled after the refreshingly dry rosés popularized in Europe, the 2020 Rosé is made entirely from Pinot Noir grown at our estate Margarita Vineyard.', 26, 'ROSÉ.jpg\r\n', 2020, NULL, NULL),
(12, 'SAUVIGNON BLANC', 'The 2019 Sauvignon Blanc exhibits a vivid varietal character that is rooted in our estate Margarita Vineyard. Here, amid one of the Paso Robles region’s coolest growing environments, the Sauvignon Blanc grape achieves a fine balance of ripeness and racine', 29, 'SAUVIGNON_BLANC.png', 2019, NULL, NULL),
(37, '2020 CHARDONNAY', 'The 2020 Chardonnay offers floral, tropical aromas of papaya and banana with hints of pear. A round, luscious texture fills the mouth with flavors of pineapple and honeydew melon, with trailing notes of fresh citrus and minerality. Sweet notes of vanilla ', 22, 'aCHARD_lowres.jpg', 2020, '2021-08-02 11:09:16', NULL),
(38, '2020 ROSÉ', 'We present the 2020 Rosé as a limited release for the spring and summer season. Modeled after the refreshingly dry Rosés popularized in Europe, the 2020 Rosé is made from Pinot Noir grown at our estate Margarita Vineyard.\"', 24, 'aROSE_lowres.jpg', 2020, '2021-08-02 11:10:17', '2021-08-02 11:10:51'),
(39, 'RENEGADE VERTICAL', 'The 2010 Renegade is loaded with generous dark fruit aromas accompanied by notes of blueberry, violets, toasty oak and smoked bacon. The palate exhibits deep fruit intensity balanced by a lively texture, with complex flavors of blackberry, black cherry, p', 140, 'Renegade-Vertical-UBAQZM.png', 2010, '2021-08-02 11:12:49', NULL),
(40, 'PEARL CABERNET SAUVIGNON', 'Introducing the inaugural vintage of our Cabernet Sauvignon Pearl Collection. This wine was crafted as the ultimate expression of Cabernet Sauvignon from our estate Margarita Vineyard—and to showcase Paso Robles as a world-class region for this preeminent', 80, 'PearlCabWebsiteResize.png', 2017, '2021-08-02 11:17:30', '2021-08-29 02:06:56');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
