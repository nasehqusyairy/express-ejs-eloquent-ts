import "module-alias/register";
import { MYSQL as DB } from "@/utils/database/DB";
import { PostSeeder } from "./PostSeeder";
import { RoleUserSeeder } from "./RoleUserSeeder";
import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";

(async () => {
    const seeders = [
        PostSeeder,
        RoleUserSeeder,
        RoleSeeder,
        UserSeeder
    ];

    for (const seeder of seeders) {
        await seeder.run();
    }

    await DB.end().finally(() => {
        console.log('\x1b[34m%s\x1b[0m', '✔ Database telah terisi');
    });
})();
