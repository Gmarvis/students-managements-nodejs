-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: schoolms
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` enum('1st','2nd','3rd') DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `town` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sex` enum('male','female') DEFAULT NULL,
  `score` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cohortId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `cohort_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cohortId` (`cohortId`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`cohortId`) REFERENCES `cohorts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('714aa218-81f3-498b-8307-0dd7a5013b10','Rash','3rd','akasia','2004-07-04','bambili','Cameroon','23790877572','rash@gmail.com','female',50,'2023-07-21 12:05:06','2023-07-21 13:57:31','bd2f9048-837c-4eff-8ff5-6e06d581405a',NULL),('76554a4d-070d-4bb9-808c-0de712d8e01e','Matin','1st','Simbock','1996-07-12','younde','Cameroon','23777877572','ntamfucollins@gmail.com','male',68,'2023-07-21 13:48:27','2023-07-21 14:11:06','bd2f9048-837c-4eff-8ff5-6e06d581405a',NULL),('8270f470-736b-4fa0-88d0-b08528c7c666','Rianna grey','2nd','simbok','2002-07-08','Buoa','Cameroon','23777877572','rgrey@gmail.com','female',70,'2023-07-21 12:00:06','2023-07-21 12:00:06',NULL,NULL),('dbc45c79-b64c-4c74-8282-d03f84496f10','jame fotune','2nd','egtu ebe','2000-07-10','Bamenda','Cameroon','23777877572','james@gmail.com','male',20,'2023-07-21 11:58:14','2023-07-21 11:58:14',NULL,NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 16:30:23
