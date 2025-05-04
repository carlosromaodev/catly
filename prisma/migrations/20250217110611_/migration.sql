/*
  Warnings:

  - You are about to drop the column `UserId` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `nomeNegocio` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the `_AdderessToComerciante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdderessToCriador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CriadorToLocalizacao` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ComercianteId]` on the table `Adderess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[creatorId]` on the table `Catalogo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[businessName]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[adderessId]` on the table `Comerciante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[merchantId]` on the table `Localizacao` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ComercianteId` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchantId` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adderessId` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessName` to the `Comerciante` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Catalogo" DROP CONSTRAINT "Catalogo_UserId_fkey";

-- DropForeignKey
ALTER TABLE "_AdderessToComerciante" DROP CONSTRAINT "_AdderessToComerciante_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdderessToComerciante" DROP CONSTRAINT "_AdderessToComerciante_B_fkey";

-- DropForeignKey
ALTER TABLE "_AdderessToCriador" DROP CONSTRAINT "_AdderessToCriador_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdderessToCriador" DROP CONSTRAINT "_AdderessToCriador_B_fkey";

-- DropForeignKey
ALTER TABLE "_CriadorToLocalizacao" DROP CONSTRAINT "_CriadorToLocalizacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_CriadorToLocalizacao" DROP CONSTRAINT "_CriadorToLocalizacao_B_fkey";

-- DropIndex
DROP INDEX "Comerciante_nomeNegocio_key";

-- AlterTable
ALTER TABLE "Adderess" ADD COLUMN     "ComercianteId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Catalogo" DROP COLUMN "UserId",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "merchantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comerciante" DROP COLUMN "nomeNegocio",
ADD COLUMN     "adderessId" TEXT NOT NULL,
ADD COLUMN     "businessName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Criador" ADD COLUMN     "adderessid" TEXT,
ADD COLUMN     "locationid" TEXT;

-- DropTable
DROP TABLE "_AdderessToComerciante";

-- DropTable
DROP TABLE "_AdderessToCriador";

-- DropTable
DROP TABLE "_CriadorToLocalizacao";

-- CreateTable
CREATE TABLE "_CatalogoToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CatalogoToUser_AB_unique" ON "_CatalogoToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CatalogoToUser_B_index" ON "_CatalogoToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Adderess_ComercianteId_key" ON "Adderess"("ComercianteId");

-- CreateIndex
CREATE UNIQUE INDEX "Catalogo_creatorId_key" ON "Catalogo"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_businessName_key" ON "Comerciante"("businessName");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_adderessId_key" ON "Comerciante"("adderessId");

-- CreateIndex
CREATE UNIQUE INDEX "Localizacao_merchantId_key" ON "Localizacao"("merchantId");

-- AddForeignKey
ALTER TABLE "Criador" ADD CONSTRAINT "Criador_locationid_fkey" FOREIGN KEY ("locationid") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Criador" ADD CONSTRAINT "Criador_adderessid_fkey" FOREIGN KEY ("adderessid") REFERENCES "Adderess"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_ComercianteId_fkey" FOREIGN KEY ("ComercianteId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalogoToUser" ADD CONSTRAINT "_CatalogoToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Catalogo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CatalogoToUser" ADD CONSTRAINT "_CatalogoToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
