/*
  Warnings:

  - The `bookingStatus` column on the `tblBookings` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tblBookings" DROP COLUMN "bookingStatus",
ADD COLUMN     "bookingStatus" "BookingStatus" NOT NULL DEFAULT 'CONFIRMED';
