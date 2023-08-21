/*
  Warnings:

  - Added the required column `nick` to the `ProIdMatches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProIdMatches` ADD COLUMN `nick` VARCHAR(191) NOT NULL;
