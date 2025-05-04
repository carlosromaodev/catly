/*
  Warnings:

  - You are about to drop the column `ComercianteId` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `adderessId` on the `Comerciante` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[comercianteId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[criadorId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UserId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `UserId` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comercianteId` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criadorId` to the `Adderess` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adderess" DROP CONSTRAINT "Adderess_ComercianteId_fkey";

-- DropForeignKey
ALTER TABLE "Criador" DROP CONSTRAINT "Criador_adderessid_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_adderessid_fkey";

-- DropIndex
DROP INDEX "Adderess_ComercianteId_key";

-- DropIndex
DROP INDEX "Comerciante_adderessId_key";

-- AlterTable
ALTER TABLE "Adderess" DROP COLUMN "ComercianteId",
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "comercianteId" TEXT NOT NULL,
ADD COLUMN     "criadorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comerciante" DROP COLUMN "adderessId";

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_comercianteId_key" ON "Adderess"("comercianteId");

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_criadorId_key" ON "Adderess"("criadorId");

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_UserId_key" ON "Adderess"("UserId");

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_comercianteId_fkey" FOREIGN KEY ("comercianteId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
