import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultType1629847955268 implements MigrationInterface {
  name = 'AddsKeyResultType1629847955268'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."key_result_format_enum" AS ENUM('ASCENDING', 'DESCENDING')`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result" ADD "format" "public"."key_result_format_enum" NOT NULL DEFAULT 'ASCENDING'`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."key_result" DROP COLUMN "format"`)
    await queryRunner.query(`DROP TYPE "public"."key_result_format_enum"`)
  }
}
