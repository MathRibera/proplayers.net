/*
  Warnings:

  - Added the required column `champion` to the `ProMatches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProMatches` ADD COLUMN `champion` VARCHAR(191) NOT NULL;
