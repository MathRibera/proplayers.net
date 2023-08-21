/*
  Warnings:

  - You are about to drop the `ProAccounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ProAccounts` DROP FOREIGN KEY `ProAccounts_AccountProId_fkey`;

-- DropTable
DROP TABLE `ProAccounts`;

-- CreateTable
CREATE TABLE `Accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nickName` VARCHAR(191) NOT NULL,
    `server` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `proId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_proId_fkey` FOREIGN KEY (`proId`) REFERENCES `ProData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
