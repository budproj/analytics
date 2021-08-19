import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultCheckInRelation1629413380925 implements MigrationInterface {
  name = 'AddsKeyResultCheckInRelation1629413380925'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_check_in" ADD "key_result_id" uuid NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_check_in" ADD CONSTRAINT "FK_e3828c8587b64a30f69401290e3" FOREIGN KEY ("key_result_id") REFERENCES "key_result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_check_in" DROP CONSTRAINT "FK_e3828c8587b64a30f69401290e3"`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_check_in" DROP COLUMN "key_result_id"`,
    )
  }
}
