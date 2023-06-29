-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItensRentalRent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "rentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL,
    CONSTRAINT "ItensRentalRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ItensRentalRent_rentId_fkey" FOREIGN KEY ("rentId") REFERENCES "Rent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItensRentalRent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ItensRentalRent" ("createdAT", "id", "productId", "rentId", "updateAT", "userId") SELECT "createdAT", "id", "productId", "rentId", "updateAT", "userId" FROM "ItensRentalRent";
DROP TABLE "ItensRentalRent";
ALTER TABLE "new_ItensRentalRent" RENAME TO "ItensRentalRent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
