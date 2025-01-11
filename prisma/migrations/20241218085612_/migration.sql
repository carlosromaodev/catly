/*
  Warnings:

  - You are about to drop the column `nome` on the `Fornecedor` table. All the data in the column will be lost.
  - You are about to drop the column `Quantidade` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `disponivel` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `_CatalogoToFornecedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CatalogoToProduto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FornecedorToProduto` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nif]` on the table `Fornecedor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nif` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeNegocio` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `catalogoId` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fornecedorId` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('DISPONIVEL', 'INDISPONIVEL');

-- DropForeignKey
ALTER TABLE "_CatalogoToFornecedor" DROP CONSTRAINT "_CatalogoToFornecedor_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalogoToFornecedor" DROP CONSTRAINT "_CatalogoToFornecedor_B_fkey";

-- DropForeignKey
ALTER TABLE "_CatalogoToProduto" DROP CONSTRAINT "_CatalogoToProduto_A_fkey";

-- DropForeignKey
ALTER TABLE "_CatalogoToProduto" DROP CONSTRAINT "_CatalogoToProduto_B_fkey";

-- DropForeignKey
ALTER TABLE "_FornecedorToProduto" DROP CONSTRAINT "_FornecedorToProduto_A_fkey";

-- DropForeignKey
ALTER TABLE "_FornecedorToProduto" DROP CONSTRAINT "_FornecedorToProduto_B_fkey";

-- AlterTable
ALTER TABLE "Catalogo" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Fornecedor" DROP COLUMN "nome",
ADD COLUMN     "nif" TEXT NOT NULL,
ADD COLUMN     "nomeNegocio" TEXT NOT NULL,
ALTER COLUMN "telefone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "catalogoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "Quantidade",
DROP COLUMN "disponivel",
ADD COLUMN     "catalogoId" TEXT,
ADD COLUMN     "disponibilidade" "Disponibilidade" NOT NULL DEFAULT 'DISPONIVEL',
ADD COLUMN     "fornecedorId" TEXT NOT NULL,
ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "fornecedorId" TEXT,
ALTER COLUMN "telefone" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_CatalogoToFornecedor";

-- DropTable
DROP TABLE "_CatalogoToProduto";

-- DropTable
DROP TABLE "_FornecedorToProduto";

-- DropEnum
DROP TYPE "Disponivel";

-- CreateTable
CREATE TABLE "Afiliacao" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "programaId" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Afiliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramaAfiliados" (
    "id" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "comissao" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgramaAfiliados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_nif_key" ON "Fornecedor"("nif");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_catalogoId_fkey" FOREIGN KEY ("catalogoId") REFERENCES "Catalogo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Afiliacao" ADD CONSTRAINT "Afiliacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Afiliacao" ADD CONSTRAINT "Afiliacao_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "ProgramaAfiliados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaAfiliados" ADD CONSTRAINT "ProgramaAfiliados_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_catalogoId_fkey" FOREIGN KEY ("catalogoId") REFERENCES "Catalogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
