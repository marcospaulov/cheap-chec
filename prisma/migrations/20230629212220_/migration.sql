/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ItensRentalRent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rentId]` on the table `ItensRentalRent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItensRentalRent_productId_key" ON "ItensRentalRent"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ItensRentalRent_rentId_key" ON "ItensRentalRent"("rentId");
