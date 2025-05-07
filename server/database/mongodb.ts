import mongoose from "mongoose";
export default async function connectMongoDB() {
    const config = useRuntimeConfig();

    try {
        await mongoose.connect(config?.mongodbURI || '');

        console.log('\x1b[32m✔\x1b[0m', 'Mongdb is connecting');
    } catch (err) {
        console.log(err);
    }
};
