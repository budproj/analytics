import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsValueToKeyResultCheckIn1629850441408 implements MigrationInterface {
  name = 'AddsValueToKeyResultCheckIn1629850441408'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_check_in" ADD "value" numeric NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."key_result_check_in" DROP COLUMN "value"`)
  }
}
