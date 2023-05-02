const Pool = require("pg").Pool

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME,
    password: process.env.DB_PWD || "0000",
    port: process.env.DB_PORT || 5432
})

module.exports = pool