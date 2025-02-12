/*
  Warnings:

  - You are about to drop the column `atualizadoEm` on the `Afiliacao` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Afiliacao` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Afiliacao` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Catalogo` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `Localizacao` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Localizacao` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Localizacao` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `ProgramaAfiliados` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `ProgramaAfiliados` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `ProgramaAfiliados` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `ProgramaAfiliados` table. All the data in the column will be lost.
  - You are about to drop the `Fornecedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `UserId` to the `Afiliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `Afiliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `Catalogo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `Localizacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ProgramaAfiliados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProgramaAfiliados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateIn` to the `ProgramaAfiliados` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('EXPLORADOR', 'COMERCIAL', 'TRASNPORTADOR', 'GUARDIAO', 'INFLUENCIADOR', 'MEDIADOR', 'CRIADOR');

-- CreateEnum
CREATE TYPE "roleEnum" AS ENUM ('User', 'FORNECEDOR', 'DISTRIBUIDOR', 'ENTREGADOR', 'GERENTE_RELACIONAMENTO', 'ADMINISTRADOR', 'LOGISTA', 'COMERCIANTE', 'ARTISTA', 'PRODUTOR', 'INFLUENTE', 'CINEMATOGRAFICO', 'YOUTUBER', 'BLOGUEIRO', 'PODCAST', 'FOTOGRAFO', 'EDUCACAO', 'TIKTOKER', 'COMEDIANTE');

-- DropForeignKey
ALTER TABLE "Afiliacao" DROP CONSTRAINT "Afiliacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Catalogo" DROP CONSTRAINT "Catalogo_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Fornecedor" DROP CONSTRAINT "Fornecedor_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_catalogoId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramaAfiliados" DROP CONSTRAINT "ProgramaAfiliados_fornecedorId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_fornecedorId_fkey";

-- AlterTable
ALTER TABLE "Afiliacao" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "usuarioId",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Catalogo" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "descricao",
DROP COLUMN "nome",
DROP COLUMN "usuarioId",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "nome",
DROP COLUMN "preco",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Localizacao" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "usuarioId",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UserId" TEXT,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "nome",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ProgramaAfiliados" DROP COLUMN "atualizadoEm",
DROP COLUMN "criadoEm",
DROP COLUMN "descricao",
DROP COLUMN "nome",
ADD COLUMN     "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updateIn" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Fornecedor";

-- DropTable
DROP TABLE "Produto";

-- DropTable
DROP TABLE "Usuario";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roleUser" "roleEnum" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Userpermission" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "Userpermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStatus" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "status" "userStatus" NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,
    "fornecedorId" TEXT,
    "adderessid" TEXT,
    "status" "userStatus" NOT NULL DEFAULT 'EXPLORADOR',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comerciante" (
    "id" TEXT NOT NULL,
    "nomeNegocio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,
    "nif" TEXT NOT NULL,

    CONSTRAINT "Comerciante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criador" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,
    "nif" TEXT NOT NULL,
    "perfileName" TEXT NOT NULL,

    CONSTRAINT "Criador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guardiao" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guardiao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adderessId" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adderess" (
    "id" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "Adderess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,
    "catalogoId" TEXT,
    "disponibilidade" "Disponibilidade" NOT NULL DEFAULT 'DISPONIVEL',
    "fornecedorId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auditoria" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "ComercianteId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conteudo" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlFoto" TEXT,
    "urlVideo" TEXT,
    "price" DOUBLE PRECISION,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateIn" TIMESTAMP(3) NOT NULL,
    "CriadorId" TEXT NOT NULL,

    CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscricao" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "perfilId" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "CreateIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inscricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_permissionRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CriadorToLocalizacao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CriadorToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CriadorToProgramaAfiliados" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BranchToCriador" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AdderessToComerciante" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AdderessToCriador" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ConteudoToInscricao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_telefone_key" ON "User"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_nomeNegocio_key" ON "Comerciante"("nomeNegocio");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_email_key" ON "Comerciante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_UserId_key" ON "Comerciante"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Comerciante_nif_key" ON "Comerciante"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Criador_email_key" ON "Criador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Criador_UserId_key" ON "Criador"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Criador_nif_key" ON "Criador"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Criador_perfileName_key" ON "Criador"("perfileName");

-- CreateIndex
CREATE UNIQUE INDEX "Guardiao_userId_key" ON "Guardiao"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_adderessId_key" ON "Branch"("adderessId");

-- CreateIndex
CREATE UNIQUE INDEX "_permissionRole_AB_unique" ON "_permissionRole"("A", "B");

-- CreateIndex
CREATE INDEX "_permissionRole_B_index" ON "_permissionRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CriadorToLocalizacao_AB_unique" ON "_CriadorToLocalizacao"("A", "B");

-- CreateIndex
CREATE INDEX "_CriadorToLocalizacao_B_index" ON "_CriadorToLocalizacao"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CriadorToProduct_AB_unique" ON "_CriadorToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CriadorToProduct_B_index" ON "_CriadorToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CriadorToProgramaAfiliados_AB_unique" ON "_CriadorToProgramaAfiliados"("A", "B");

-- CreateIndex
CREATE INDEX "_CriadorToProgramaAfiliados_B_index" ON "_CriadorToProgramaAfiliados"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BranchToCriador_AB_unique" ON "_BranchToCriador"("A", "B");

-- CreateIndex
CREATE INDEX "_BranchToCriador_B_index" ON "_BranchToCriador"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdderessToComerciante_AB_unique" ON "_AdderessToComerciante"("A", "B");

-- CreateIndex
CREATE INDEX "_AdderessToComerciante_B_index" ON "_AdderessToComerciante"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdderessToCriador_AB_unique" ON "_AdderessToCriador"("A", "B");

-- CreateIndex
CREATE INDEX "_AdderessToCriador_B_index" ON "_AdderessToCriador"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConteudoToInscricao_AB_unique" ON "_ConteudoToInscricao"("A", "B");

-- CreateIndex
CREATE INDEX "_ConteudoToInscricao_B_index" ON "_ConteudoToInscricao"("B");

-- AddForeignKey
ALTER TABLE "Userpermission" ADD CONSTRAINT "Userpermission_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Userpermission" ADD CONSTRAINT "Userpermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStatus" ADD CONSTRAINT "UserStatus_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Comerciante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adderessid_fkey" FOREIGN KEY ("adderessid") REFERENCES "Adderess"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comerciante" ADD CONSTRAINT "Comerciante_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Criador" ADD CONSTRAINT "Criador_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guardiao" ADD CONSTRAINT "Guardiao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localizacao" ADD CONSTRAINT "Localizacao_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Comerciante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localizacao" ADD CONSTRAINT "Localizacao_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_adderessId_fkey" FOREIGN KEY ("adderessId") REFERENCES "Adderess"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalogo" ADD CONSTRAINT "Catalogo_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catalogoId_fkey" FOREIGN KEY ("catalogoId") REFERENCES "Catalogo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Afiliacao" ADD CONSTRAINT "Afiliacao_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramaAfiliados" ADD CONSTRAINT "ProgramaAfiliados_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_ComercianteId_fkey" FOREIGN KEY ("ComercianteId") REFERENCES "Comerciante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conteudo" ADD CONSTRAINT "Conteudo_CriadorId_fkey" FOREIGN KEY ("CriadorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permissionRole" ADD CONSTRAINT "_permissionRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permissionRole" ADD CONSTRAINT "_permissionRole_B_fkey" FOREIGN KEY ("B") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToLocalizacao" ADD CONSTRAINT "_CriadorToLocalizacao_A_fkey" FOREIGN KEY ("A") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToLocalizacao" ADD CONSTRAINT "_CriadorToLocalizacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Localizacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToProduct" ADD CONSTRAINT "_CriadorToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToProduct" ADD CONSTRAINT "_CriadorToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToProgramaAfiliados" ADD CONSTRAINT "_CriadorToProgramaAfiliados_A_fkey" FOREIGN KEY ("A") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CriadorToProgramaAfiliados" ADD CONSTRAINT "_CriadorToProgramaAfiliados_B_fkey" FOREIGN KEY ("B") REFERENCES "ProgramaAfiliados"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToCriador" ADD CONSTRAINT "_BranchToCriador_A_fkey" FOREIGN KEY ("A") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToCriador" ADD CONSTRAINT "_BranchToCriador_B_fkey" FOREIGN KEY ("B") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdderessToComerciante" ADD CONSTRAINT "_AdderessToComerciante_A_fkey" FOREIGN KEY ("A") REFERENCES "Adderess"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdderessToComerciante" ADD CONSTRAINT "_AdderessToComerciante_B_fkey" FOREIGN KEY ("B") REFERENCES "Comerciante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdderessToCriador" ADD CONSTRAINT "_AdderessToCriador_A_fkey" FOREIGN KEY ("A") REFERENCES "Adderess"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdderessToCriador" ADD CONSTRAINT "_AdderessToCriador_B_fkey" FOREIGN KEY ("B") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConteudoToInscricao" ADD CONSTRAINT "_ConteudoToInscricao_A_fkey" FOREIGN KEY ("A") REFERENCES "Conteudo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConteudoToInscricao" ADD CONSTRAINT "_ConteudoToInscricao_B_fkey" FOREIGN KEY ("B") REFERENCES "Inscricao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
