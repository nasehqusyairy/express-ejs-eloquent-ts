import 'module-alias/register';
import { MYSQL as DB } from "@/utils/database/DB";

export class RoleUserSeeder {
    static async run() {
        const records = [
            {
                "id": 1,
                "user_id": 1,
                "role_id": 1,
                "created_at": "2025-02-07T17:08:55.000Z",
                "updated_at": "2025-02-12T07:31:06.000Z"
            }
        ];
        let keys = Object.keys(records[0]);
        let values = records
            .map(row => `(${keys.map(key => JSON.stringify(row[key])).join(", ")})`)
            .join(",\n        ");

        await DB.execute(`INSERT INTO role_user (${keys.join(", ")}) VALUES
        ${values};`);
    }
}
