/*
  Warnings:

  - Added the required column `server` to the `ProData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProData` ADD COLUMN `server` VARCHAR(191) NOT NULL;
