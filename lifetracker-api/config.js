require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR ? Number(process.env.BCRYPT_WORK_FACTOR) : 13
const SECRET_KEY = process.env.SECRET_KEY ? String(process.env.SECRET_KEY) : "superlongrandomstring"

const IS_TESTING = process.env.NODE_ENV === "test"

function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "lifetracker"

    // if the DATABASE_URL environment variable, user that,
    //otherwise create the db connection string ourselves
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

}

console.log("App Config".red)
console.log("PORT:".blue, PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("---")

module.exports = {
    PORT,
    BCRYPT_WORK_FACTOR,
    IS_TESTING,
    SECRET_KEY,
    getDatabaseUri,
}