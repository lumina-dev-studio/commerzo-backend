/*
  Warnings:

  - You are about to drop the column `logo` on the `Logo` table. All the data in the column will be lost.
  - Added the required column `logoUrl` to the `Logo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Logo" DROP COLUMN "logo",
ADD COLUMN     "logoUrl" TEXT NOT NULL;
