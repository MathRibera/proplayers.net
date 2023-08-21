/*
  Warnings:

  - Added the required column `region` to the `ProData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProData` ADD COLUMN `region` VARCHAR(191) NOT NULL;
