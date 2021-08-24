import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultProgressData1629844050939 implements MigrationInterface {
  name = 'AddsKeyResultProgressData1629844050939'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."key_result" ADD "initial_value" numeric NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "public"."key_result" ADD "goal" numeric NOT NULL`)
    await queryRunner.query(
      `CREATE TYPE "public"."key_result_format_enum" AS ENUM('NUMBER', 'PERCENTAGE', 'COIN_BRL', 'COIN_USD')`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result" ADD "format" "public"."key_result_format_enum" NOT NULL DEFAULT 'PERCENTAGE'`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."key_result" DROP COLUMN "format"`)
    await queryRunner.query(`DROP TYPE "public"."key_result_format_enum"`)
    await queryRunner.query(`ALTER TABLE "public"."key_result" DROP COLUMN "goal"`)
    await queryRunner.query(`ALTER TABLE "public"."key_result" DROP COLUMN "initial_value"`)
  }
}
