-- DropForeignKey
ALTER TABLE `Accounts` DROP FOREIGN KEY `Accounts_proId_fkey`;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_proId_fkey` FOREIGN KEY (`proId`) REFERENCES `ProPlayers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
