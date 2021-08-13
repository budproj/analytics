import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsKeyResultAndKeyResultRecord1628897077262 implements MigrationInterface {
  name = 'AddsKeyResultAndKeyResultRecord1628897077262'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "key_result_progress_record" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "progress" numeric NOT NULL, "date" TIMESTAMP NOT NULL, "key_result_id" uuid NOT NULL, CONSTRAINT "PK_88d295f1f55f76698e40dd55207" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "key_result" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9064c5abe9ba68432934564d43f" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "key_result_progress_record" ADD CONSTRAINT "FK_7b48f2f3dace67250101d17c283" FOREIGN KEY ("key_result_id") REFERENCES "key_result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "key_result_progress_record" DROP CONSTRAINT "FK_7b48f2f3dace67250101d17c283"`,
    )
    await queryRunner.query(`DROP TABLE "key_result"`)
    await queryRunner.query(`DROP TABLE "key_result_progress_record"`)
  }
}
