/*
  Warnings:

  - Added the required column `username` to the `tblUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tblUsers" ADD COLUMN     "username" TEXT NOT NULL;
