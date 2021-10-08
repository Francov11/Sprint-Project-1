/*const redis = require('redis');
require('dotenv').config();
const httpError = require('../helpers/httpError');

// const client = redis.createClient();
async function conect_redis() {
    try {
        const redisClient = await redis.createClient({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            db: 0
        });

        await redisClient.on("error", function (error) {
            console.error(error);
        });
        console.log('redis conected')
    }
    catch (err) {
        console.log(err.message);
        //httpError(req, res, err);
    }
}
conect_redis();

module.exports = redis*/