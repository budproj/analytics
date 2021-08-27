import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultCheckIn1629246764279 implements MigrationInterface {
  name = 'AddsKeyResultCheckIn1629246764279'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "key_result_check_in" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_32838fec4e2916067f9e4919d4c" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" ADD "key_result_check_in_id" character varying`,
    )
    await queryRunner.query(
      `ALTER TABLE "key_result_progress_record" ALTER COLUMN "key_result_check_in_id" SET NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" DROP COLUMN "key_result_check_in_id"`,
    )
    await queryRunner.query(`DROP TABLE "key_result_check_in"`)
  }
}
