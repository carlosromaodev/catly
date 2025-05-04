/*
  Warnings:

  - You are about to drop the column `cidade` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `Adderess` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Adderess` table. All the data in the column will be lost.
  - Added the required column `city` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Adderess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Adderess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adderess" DROP COLUMN "cidade",
DROP COLUMN "estado",
DROP COLUMN "pais",
DROP COLUMN "rua",
DROP COLUMN "zip",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL;
