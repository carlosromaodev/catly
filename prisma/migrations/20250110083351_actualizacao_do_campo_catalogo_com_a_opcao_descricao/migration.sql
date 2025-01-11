/*
  Warnings:

  - Added the required column `descricao` to the `Catalogo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalogo" ADD COLUMN     "descricao" TEXT NOT NULL;
