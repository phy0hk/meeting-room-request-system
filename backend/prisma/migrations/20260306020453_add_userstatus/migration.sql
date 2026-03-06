-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "tblRooms" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';
