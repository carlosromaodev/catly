/*
  Warnings:

  - The values [FORNECEDOR] on the enum `roleEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `fornecedorId` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Comerciante` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Criador` table. All the data in the column will be lost.
  - You are about to drop the column `pago` on the `Inscricao` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedorId` on the `Localizacao` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedorId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedorId` on the `ProgramaAfiliados` table. All the data in the column will be lost.
  - You are about to drop the column `fornecedorId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `merchantId` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Comerciante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Criador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchantId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchantId` to the `ProgramaAfiliados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('PENDING', 'IN_REVIEW', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ReportCategory" AS ENUM ('FRAUDE', 'CONTEUDO_INAPROPRIADO', 'SPAM', 'ATENDIMENTO_RUIM', 'OUTROS');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "paymentMethod" AS ENUM ('MULTICAIXA_EXPRESS', 'TRANSFERENCIA_BANCARIA', 'PAGAMENTO_POR_REFERENCIA', 'PAGAMENTO_NA_ENTREGA');

-- AlterEnum
BEGIN;
CREATE TYPE "roleEnum_new" AS ENUM ('User', 'merchant', 'DISTRIBUIDOR', 'ENTREGADOR', 'GERENTE_RELACIONAMENTO', 'ADMINISTRADOR', 'LOGISTA', 'COMERCIANTE', 'ARTISTA', 'PRODUTOR', 'INFLUENTE', 'CINEMATOGRAFICO', 'YOUTUBER', 'BLOGUEIRO', 'PODCAST', 'FOTOGRAFO', 'EDUCACAO', 'TIKTOKER', 'COMEDIANTE');
ALTER TABLE "Role" ALTER COLUMN "roleUser" TYPE "roleEnum_new" USING ("roleUser"::text::"roleEnum_new");
ALTER TYPE "roleEnum" RENAME TO "roleEnum_old";
ALTER TYPE "roleEnum_new" RENAME TO "roleEnum";
DROP TYPE "roleEnum_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramaAfiliados" DROP CONSTRAINT "ProgramaAfiliados_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fornecedorId_fkey";

-- DropIndex
DROP INDEX "User_telefone_key";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "fornecedorId",
ADD COLUMN     "merchantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comerciante" DROP COLUMN "telefone",
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Criador" DROP COLUMN "telefone",
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Inscricao" DROP COLUMN "pago",
ADD COLUMN     "price" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Localizacao" DROP COLUMN "fornecedorId",
ADD COLUMN     "merchantId" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "fornecedorId",
ADD COLUMN     "merchantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProgramaAfiliados" DROP COLUMN "fornecedorId",
ADD COLUMN     "merchantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fornecedorId",
DROP COLUMN "senha",
DROP COLUMN "telefone",
ADD COLUMN     "merchantId" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "reportedId" TEXT,
    "productId" TEXT,
    "category" "ReportCategory" NOT NULL,
    "description" TEXT NOT NULL,
    "status" "ReportStatus" NOT NULL DEFAULT 'PENDING',
    "guardianId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentAudit" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentMethod" "paymentMethod" NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_user reporter" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_user reporter_AB_unique" ON "_user reporter"("A", "B");

-- CreateIndex
CREATE INDEX "_user reporter_B_index" ON "_user reporter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localizacao" ADD CONSTRAINT "Localizacao_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaAfiliados" ADD CONSTRAINT "ProgramaAfiliados_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reportedId_fkey" FOREIGN KEY ("reportedId") REFERENCES "Comerciante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "Guardiao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAudit" ADD CONSTRAINT "PaymentAudit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAudit" ADD CONSTRAINT "PaymentAudit_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAudit" ADD CONSTRAINT "PaymentAudit_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_user reporter" ADD CONSTRAINT "_user reporter_A_fkey" FOREIGN KEY ("A") REFERENCES "Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_user reporter" ADD CONSTRAINT "_user reporter_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
