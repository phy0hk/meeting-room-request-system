/*
  Warnings:

  - You are about to drop the column `status` on the `tblRooms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tblRooms" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "tblUsers" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';
