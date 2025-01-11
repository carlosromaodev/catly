/*
  Warnings:

  - You are about to drop the column `descricao` on the `Localizacao` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fornecedor" ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Localizacao" DROP COLUMN "descricao";
