/*
  Warnings:

  - You are about to drop the column `ComercianteId` on the `Auditoria` table. All the data in the column will be lost.
  - You are about to drop the `Comerciante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AfiliacaoToComerciante` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `MerchantId` to the `Auditoria` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adderess" DROP CONSTRAINT "Adderess_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Auditoria" DROP CONSTRAINT "Auditoria_ComercianteId_fkey";

-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Catalogo" DROP CONSTRAINT "Catalogo_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Comerciante" DROP CONSTRAINT "Comerciante_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Comerciante" DROP CONSTRAINT "Comerciante_userId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentAudit" DROP CONSTRAINT "PaymentAudit_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramaAfiliados" DROP CONSTRAINT "ProgramaAfiliados_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reportedId_fkey";

-- DropForeignKey
ALTER TABLE "_AfiliacaoToComerciante" DROP CONSTRAINT "_AfiliacaoToComerciante_A_fkey";

-- DropForeignKey
ALTER TABLE "_AfiliacaoToComerciante" DROP CONSTRAINT "_AfiliacaoToComerciante_B_fkey";

-- AlterTable
ALTER TABLE "Auditoria" DROP COLUMN "ComercianteId",
ADD COLUMN     "MerchantId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comerciante";

-- DropTable
DROP TABLE "_AfiliacaoToComerciante";

-- CreateTable
CREATE TABLE "Merchant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bi" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profileImage" TEXT,
    "coverImage" TEXT,
    "bank" TEXT,
    "ibanOfBank" TEXT,
    "numberBank" TEXT,
    "instagram" TEXT,
    "whatsapp" TEXT,
    "facebook" TEXT,
    "website" TEXT,
    "locationId" TEXT,
    "addressId" TEXT,
    "hoursOfOperation" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AfiliacaoToMerchant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AfiliacaoToMerchant_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_userId_key" ON "Merchant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_businessName_key" ON "Merchant"("businessName");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_email_key" ON "Merchant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_bi_key" ON "Merchant"("bi");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_nif_key" ON "Merchant"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_locationId_key" ON "Merchant"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_addressId_key" ON "Merchant"("addressId");

-- CreateIndex
CREATE INDEX "_AfiliacaoToMerchant_B_index" ON "_AfiliacaoToMerchant"("B");

-- AddForeignKey
ALTER TABLE "Merchant" ADD CONSTRAINT "Merchant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Merchant" ADD CONSTRAINT "Merchant_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adderess" ADD CONSTRAINT "Adderess_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaAfiliados" ADD CONSTRAINT "ProgramaAfiliados_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_MerchantId_fkey" FOREIGN KEY ("MerchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedId_fkey" FOREIGN KEY ("reportedId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAudit" ADD CONSTRAINT "PaymentAudit_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AfiliacaoToMerchant" ADD CONSTRAINT "_AfiliacaoToMerchant_A_fkey" FOREIGN KEY ("A") REFERENCES "Afiliacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AfiliacaoToMerchant" ADD CONSTRAINT "_AfiliacaoToMerchant_B_fkey" FOREIGN KEY ("B") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
