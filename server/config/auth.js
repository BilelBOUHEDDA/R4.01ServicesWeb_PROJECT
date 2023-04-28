require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET | "6guy1pc"
};