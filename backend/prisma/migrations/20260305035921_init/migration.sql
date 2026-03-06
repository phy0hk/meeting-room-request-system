-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "tblUsers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL,

    CONSTRAINT "tblUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tblBookings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "attendeeCount" INTEGER NOT NULL,
    "bookingStatus" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tblBookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tblRooms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "tblRooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tblRooms_name_key" ON "tblRooms"("name");

-- AddForeignKey
ALTER TABLE "tblBookings" ADD CONSTRAINT "tblBookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tblUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tblBookings" ADD CONSTRAINT "tblBookings_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "tblRooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
