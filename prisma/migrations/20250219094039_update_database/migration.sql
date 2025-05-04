/*
  Warnings:

  - You are about to drop the column `comercianteId` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `criadorId` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `CreateIn` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the column `updateIn` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the column `nif` on the `Criador` table. All the data in the column will be lost.
  - You are about to drop the column `merchantId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[merchantId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[creatorId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bi]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchantId` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bi` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hoursOfOperation` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ibanOfBank` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberBank` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Criador` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adderess" DROP CONSTRAINT "Adderess_comercianteId_fkey";

-- DropForeignKey
ALTER TABLE "Adderess" DROP CONSTRAINT "Adderess_criadorId_fkey";

-- DropForeignKey
ALTER TABLE "Comerciante" DROP CONSTRAINT "Comerciante_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_merchantId_fkey";

-- DropIndex
DROP INDEX "Adderess_comercianteId_key";

-- DropIndex
DROP INDEX "Adderess_criadorId_key";

-- DropIndex
DROP INDEX "Comerciante_UserId_key";

-- DropIndex
DROP INDEX "Criador_nif_key";

-- AlterTable
ALTER TABLE "Adderess" DROP COLUMN "comercianteId",
DROP COLUMN "criadorId",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "merchantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comerciante" DROP COLUMN "CreateIn",
DROP COLUMN "UserId",
DROP COLUMN "updateIn",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "bank" TEXT NOT NULL,
ADD COLUMN     "bi" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "hoursOfOperation" TEXT NOT NULL,
ADD COLUMN     "ibanOfBank" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "locationId" TEXT,
ADD COLUMN     "numberBank" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "subcategory" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "website" TEXT,
ADD COLUMN     "whatsapp" TEXT;

-- AlterTable
ALTER TABLE "Criador" DROP COLUMN "nif",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "merchantId";

-- CreateTable
CREATE TABLE "_AfiliacaoToComerciante" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AfiliacaoToComerciante_AB_unique" ON "_AfiliacaoToComerciante"("A", "B");

-- CreateIndex
CREATE INDEX "_AfiliacaoToComerciante_B_index" ON "_AfiliacaoToComerciante"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_merchantId_key" ON "Adderess"("merchantId");

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_creatorId_key" ON "Adderess"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_userId_key" ON "Comerciante"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_bi_key" ON "Comerciante"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_locationId_key" ON "Comerciante"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_addressId_key" ON "Comerciante"("addressId");

-- AddForeignKey
ALTER TABLE "Comerciante" ADD CONSTRAINT "Comerciante_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comerciante" ADD CONSTRAINT "Comerciante_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AfiliacaoToComerciante" ADD CONSTRAINT "_AfiliacaoToComerciante_A_fkey" FOREIGN KEY ("A") REFERENCES "Afiliacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AfiliacaoToComerciante" ADD CONSTRAINT "_AfiliacaoToComerciante_B_fkey" FOREIGN KEY ("B") REFERENCES "Comerciante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
