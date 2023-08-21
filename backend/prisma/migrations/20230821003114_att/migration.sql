-- CreateTable
CREATE TABLE `ProData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `puuid` VARCHAR(191) NOT NULL,
    `accountId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
