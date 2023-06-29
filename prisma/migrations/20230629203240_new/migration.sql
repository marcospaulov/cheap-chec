-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CPF" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "measure" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "tissueType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "insuranceValue" REAL NOT NULL DEFAULT 0,
    "productsValue" REAL NOT NULL DEFAULT 0,
    "totalValue" REAL NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL,
    CONSTRAINT "Rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItensRentalRent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "rentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL,
    CONSTRAINT "ItensRentalRent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItensRentalRent_rentId_fkey" FOREIGN KEY ("rentId") REFERENCES "Rent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItensRentalRent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_CPF_key" ON "User"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
