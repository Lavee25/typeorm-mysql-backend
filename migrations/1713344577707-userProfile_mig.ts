import { MigrationInterface, QueryRunner } from "typeorm";

export class UserProfileMig1713344577707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_profile` ADD `created_at` INT NOT NULL AFTER `gender`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query( "ALTER TABLE `user_profile` DROP `created_at")
    }


}
