/*
  Warnings:

  - Added the required column `role` to the `Fornecedor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fornecedor" ADD COLUMN     "role" "Role" NOT NULL;
