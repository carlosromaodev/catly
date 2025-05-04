/*
  Warnings:

  - The values [FORNECEDOR_DE_SERVICOS] on the enum `roleEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "roleEnum_new" AS ENUM ('EXPLORADOR', 'CRIADOR_DE_CONTEUDO', 'INFLUENCIADOR', 'ARTISTA', 'PRODUTOR_DE_VIDEO', 'PODCASTER', 'YOUTUBER', 'VENDEDOR_DE_PRODUTOS_DIGITAIS', 'VENDEDOR_DE_PRODUTOS_FISICOS', 'DESIGNER_DIGITAL', 'COMEDIANTE', 'MUSICO', 'MODELO', 'INFLUENCIADOR_ADULTO', 'MENTOR', 'COACH_DE_CARREIRA', 'PROFESSOR_PARTICULAR', 'CURADOR_DE_CONTEUDO', 'GERENTE_DE_ECOMMERCE', 'CONSULTOR', 'PERSONAL_TRAINER');
ALTER TABLE "Role" ALTER COLUMN "roleUser" TYPE "roleEnum_new" USING ("roleUser"::text::"roleEnum_new");
ALTER TYPE "roleEnum" RENAME TO "roleEnum_old";
ALTER TYPE "roleEnum_new" RENAME TO "roleEnum";
DROP TYPE "roleEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "_AfiliacaoToComerciante" ADD CONSTRAINT "_AfiliacaoToComerciante_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_AfiliacaoToComerciante_AB_unique";

-- AlterTable
ALTER TABLE "_BranchToCriador" ADD CONSTRAINT "_BranchToCriador_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_BranchToCriador_AB_unique";

-- AlterTable
ALTER TABLE "_CatalogoToUser" ADD CONSTRAINT "_CatalogoToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CatalogoToUser_AB_unique";

-- AlterTable
ALTER TABLE "_ConteudoToInscricao" ADD CONSTRAINT "_ConteudoToInscricao_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ConteudoToInscricao_AB_unique";

-- AlterTable
ALTER TABLE "_CriadorToProduct" ADD CONSTRAINT "_CriadorToProduct_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CriadorToProduct_AB_unique";

-- AlterTable
ALTER TABLE "_CriadorToProgramaAfiliados" ADD CONSTRAINT "_CriadorToProgramaAfiliados_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_CriadorToProgramaAfiliados_AB_unique";

-- AlterTable
ALTER TABLE "_permissionRole" ADD CONSTRAINT "_permissionRole_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_permissionRole_AB_unique";

-- AlterTable
ALTER TABLE "_user reporter" ADD CONSTRAINT "_user reporter_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_user reporter_AB_unique";
