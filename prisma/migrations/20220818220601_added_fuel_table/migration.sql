-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('REGULAR', 'MID', 'PREMIUM');

-- CreateTable
CREATE TABLE "Fuel" (
    "id" SERIAL NOT NULL,
    "grade" "Grade" NOT NULL,
    "gallons" DECIMAL(1,1) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,

    CONSTRAINT "Fuel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fuel" ADD CONSTRAINT "Fuel_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
