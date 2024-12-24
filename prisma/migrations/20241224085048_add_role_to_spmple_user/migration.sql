/*
  Warnings:

  - Added the required column `role` to the `SimpleUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SimpleUser" ADD COLUMN     "role" TEXT NOT NULL;
