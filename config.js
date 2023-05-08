module.exports = {
    database: process.env.DB_NAME || "elaniin",
    username: process.env.DB_USERNAME || "Username",
    password: process.env.DB_PASSWORD || "Password",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
};
