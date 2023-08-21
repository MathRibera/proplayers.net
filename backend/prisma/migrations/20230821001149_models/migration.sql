/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `ProPlayers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nick` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `teamId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProTeams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProIdMatches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matchId` INTEGER NOT NULL,
    `proPlayerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProAccounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accountOne` INTEGER NOT NULL,
    `accountOneElo` VARCHAR(191) NOT NULL,
    `accountOneWins` INTEGER NOT NULL,
    `accountOneLosses` INTEGER NOT NULL,
    `accountOneNick` VARCHAR(191) NOT NULL,
    `accountTwo` INTEGER NOT NULL,
    `accountTwoElo` VARCHAR(191) NOT NULL,
    `accountTwoWins` INTEGER NOT NULL,
    `accountTwoLosses` INTEGER NOT NULL,
    `accountTwoNick` VARCHAR(191) NOT NULL,
    `AccountProId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProMatches` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matchId` INTEGER NOT NULL,
    `proPlayerId` INTEGER NOT NULL,
    `win` BOOLEAN NOT NULL,
    `kills` INTEGER NOT NULL,
    `deaths` INTEGER NOT NULL,
    `assists` INTEGER NOT NULL,
    `cs` INTEGER NOT NULL,
    `gold` INTEGER NOT NULL,
    `teamId` INTEGER NOT NULL,
    `allyOne` VARCHAR(191) NOT NULL,
    `allyTwo` VARCHAR(191) NOT NULL,
    `allyThree` VARCHAR(191) NOT NULL,
    `allyFour` VARCHAR(191) NOT NULL,
    `allyFive` VARCHAR(191) NOT NULL,
    `enemyOne` VARCHAR(191) NOT NULL,
    `enemyTwo` VARCHAR(191) NOT NULL,
    `enemyThree` VARCHAR(191) NOT NULL,
    `enemyFour` VARCHAR(191) NOT NULL,
    `enemyFive` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProPlayers` ADD CONSTRAINT `ProPlayers_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `ProTeams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProIdMatches` ADD CONSTRAINT `ProIdMatches_proPlayerId_fkey` FOREIGN KEY (`proPlayerId`) REFERENCES `ProPlayers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProAccounts` ADD CONSTRAINT `ProAccounts_AccountProId_fkey` FOREIGN KEY (`AccountProId`) REFERENCES `ProPlayers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProMatches` ADD CONSTRAINT `ProMatches_proPlayerId_fkey` FOREIGN KEY (`proPlayerId`) REFERENCES `ProPlayers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
