/*
  Warnings:

  - The values [FRAUDE,CONTEUDO_INAPROPRIADO,ATENDIMENTO_RUIM,OUTROS] on the enum `ReportCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [User,merchant,DISTRIBUIDOR,ENTREGADOR,GERENTE_RELACIONAMENTO,ADMINISTRADOR,LOGISTA,COMERCIANTE,PRODUTOR,INFLUENTE,CINEMATOGRAFICO,BLOGUEIRO,PODCAST,FOTOGRAFO,EDUCACAO,TIKTOKER] on the enum `roleEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [EXPLORADOR,COMERCIAL,TRASNPORTADOR,GUARDIAO,INFLUENCIADOR,MEDIADOR,CRIADOR] on the enum `userStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `PaymentAudit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReportCategory_new" AS ENUM ('FRAUD', 'INAPPROPRIATE_CONTENT', 'SPAM', 'POOR_SERVICE', 'OTHER');
ALTER TABLE "Report" ALTER COLUMN "category" TYPE "ReportCategory_new" USING ("category"::text::"ReportCategory_new");
ALTER TYPE "ReportCategory" RENAME TO "ReportCategory_old";
ALTER TYPE "ReportCategory_new" RENAME TO "ReportCategory";
DROP TYPE "ReportCategory_old";
COMMIT;

-- AlterEnum
ALTER TYPE "paymentMethod" ADD VALUE 'PAGAMENTO_CODIGO_QR';

-- AlterEnum
BEGIN;
CREATE TYPE "roleEnum_new" AS ENUM ('CRIADOR_DE_CONTEUDO', 'INFLUENCIADOR', 'ARTISTA', 'PRODUTOR_DE_VIDEO', 'PODCASTER', 'YOUTUBER', 'VENDEDOR_DE_PRODUTOS_DIGITAIS', 'VENDEDOR_DE_PRODUTOS_FISICOS', 'DESIGNER_DIGITAL', 'COMEDIANTE', 'MUSICO', 'MODELO', 'INFLUENCIADOR_ADULTO', 'MENTOR', 'COACH_DE_CARREIRA', 'PROFESSOR_PARTICULAR', 'CURADOR_DE_CONTEUDO', 'GERENTE_DE_ECOMMERCE', 'CONSULTOR', 'PERSONAL_TRAINER');
ALTER TABLE "Role" ALTER COLUMN "roleUser" TYPE "roleEnum_new" USING ("roleUser"::text::"roleEnum_new");
ALTER TYPE "roleEnum" RENAME TO "roleEnum_old";
ALTER TYPE "roleEnum_new" RENAME TO "roleEnum";
DROP TYPE "roleEnum_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "userStatus_new" AS ENUM ('Explorador', 'CriadorDeConteudo', 'FornecedorDeServicos', 'VendedorDeProdutos', 'GestorDeComunidade');
ALTER TABLE "User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "UserStatus" ALTER COLUMN "status" TYPE "userStatus_new" USING ("status"::text::"userStatus_new");
ALTER TABLE "User" ALTER COLUMN "status" TYPE "userStatus_new" USING ("status"::text::"userStatus_new");
ALTER TYPE "userStatus" RENAME TO "userStatus_old";
ALTER TYPE "userStatus_new" RENAME TO "userStatus";
DROP TYPE "userStatus_old";
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'Explorador';
COMMIT;

-- AlterTable
ALTER TABLE "PaymentAudit" ADD COLUMN     "description" TEXT,
ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "refundDate" TIMESTAMP(3),
ADD COLUMN     "transactionId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'Explorador';
