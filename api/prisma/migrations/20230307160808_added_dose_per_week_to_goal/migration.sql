-- AlterTable
ALTER TABLE "Badge" ALTER COLUMN "shown" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "dosesPerWeek" DOUBLE PRECISION NOT NULL DEFAULT 0;
