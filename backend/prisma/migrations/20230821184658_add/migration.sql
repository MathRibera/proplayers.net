/*
  Warnings:

  - Added the required column `puuid` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Accounts` ADD COLUMN `puuid` VARCHAR(191) NOT NULL;
