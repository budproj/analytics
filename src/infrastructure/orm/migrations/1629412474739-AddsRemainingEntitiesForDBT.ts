import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddsRemainingEntitiesForDBT1629412474739 implements MigrationInterface {
  name = 'AddsRemainingEntitiesForDBT1629412474739'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "team" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "company_id" uuid NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "company_users_user" ("company_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_89095648a00ab0c550eaa131967" PRIMARY KEY ("company_id", "user_id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_c16894a284c8614c192c7f8667" ON "company_users_user" ("company_id") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_2bb111a3e1acf66ede6721a542" ON "company_users_user" ("user_id") `,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" DROP COLUMN "key_result_check_in_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" ADD "key_result_check_in_id" uuid NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" ADD CONSTRAINT "UQ_733cb5b8a56410552375044dec5" UNIQUE ("key_result_check_in_id")`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" ADD CONSTRAINT "FK_733cb5b8a56410552375044dec5" FOREIGN KEY ("key_result_check_in_id") REFERENCES "key_result_check_in"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "team" ADD CONSTRAINT "FK_b36ca3769370f1fe4f5519e85f9" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "company_users_user" ADD CONSTRAINT "FK_c16894a284c8614c192c7f8667b" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "company_users_user" ADD CONSTRAINT "FK_2bb111a3e1acf66ede6721a5428" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "company_users_user" DROP CONSTRAINT "FK_2bb111a3e1acf66ede6721a5428"`,
    )
    await queryRunner.query(
      `ALTER TABLE "company_users_user" DROP CONSTRAINT "FK_c16894a284c8614c192c7f8667b"`,
    )
    await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "FK_b36ca3769370f1fe4f5519e85f9"`)
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" DROP CONSTRAINT "FK_733cb5b8a56410552375044dec5"`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" DROP CONSTRAINT "UQ_733cb5b8a56410552375044dec5"`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" DROP COLUMN "key_result_check_in_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."key_result_progress_record" ADD "key_result_check_in_id" character varying NOT NULL`,
    )
    await queryRunner.query(`DROP INDEX "IDX_2bb111a3e1acf66ede6721a542"`)
    await queryRunner.query(`DROP INDEX "IDX_c16894a284c8614c192c7f8667"`)
    await queryRunner.query(`DROP TABLE "company_users_user"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TABLE "team"`)
    await queryRunner.query(`DROP TABLE "company"`)
  }
}
