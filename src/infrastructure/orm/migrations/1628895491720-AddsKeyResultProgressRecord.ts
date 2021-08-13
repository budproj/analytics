import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultProgressRecord1628895491720 implements MigrationInterface {
  name = 'AddsKeyResultProgressRecord1628895491720'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "key_result_progress_records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "progress" numeric NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_45713557ce24beeb9a6b5e186df" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "key_result_progress_records"`)
  }
}
