/*
  Warnings:

  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "measure" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "tissueType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("brand", "createdAT", "id", "measure", "price", "productDescription", "productType", "tissueType", "updateAT", "userId") SELECT "brand", "createdAT", "id", "measure", "price", "productDescription", "productType", "tissueType", "updateAT", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
