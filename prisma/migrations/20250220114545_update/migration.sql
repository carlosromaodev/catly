/*
  Warnings:

  - You are about to drop the column `category` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the column `subcategory` on the `Comerciante` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comerciante" DROP COLUMN "category",
DROP COLUMN "subcategory",
ALTER COLUMN "bank" DROP NOT NULL,
ALTER COLUMN "hoursOfOperation" DROP NOT NULL,
ALTER COLUMN "ibanOfBank" DROP NOT NULL,
ALTER COLUMN "numberBank" DROP NOT NULL;
