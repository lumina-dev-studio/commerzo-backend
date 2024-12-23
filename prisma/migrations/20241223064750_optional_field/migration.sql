-- DropIndex
DROP INDEX "SocialAccount_account_key";

-- AlterTable
ALTER TABLE "Logo" ALTER COLUMN "logoUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Number" ALTER COLUMN "number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SocialAccount" ALTER COLUMN "account" DROP NOT NULL,
ALTER COLUMN "emoji" DROP NOT NULL;
