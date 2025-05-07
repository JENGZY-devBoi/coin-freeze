import { Nitro } from 'nitropack';
import connectMongoDB from '~/server/database/mongodb';

export default async (_nitroApp: Nitro) => {
    console.log('\x1b[32m✔\x1b[0m', 'Nitro plugin accessing');

    await connectMongoDB();
};
