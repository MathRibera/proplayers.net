/*
  Warnings:

  - Added the required column `proId` to the `ProMatches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProMatches` ADD COLUMN `proId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ProMatches` ADD CONSTRAINT `ProMatches_proId_fkey` FOREIGN KEY (`proId`) REFERENCES `ProData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
