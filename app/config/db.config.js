module.exports = {
    HOST: process.env.MYSQL_HOST || 'localhost',
    USER: process.env.MYSQL_USER || 'root',
    PASSWORD: process.env.MYSQL_PASSWORD || '',
    DB: process.env.MYSQL_DB || 'test',
    dialect: "mysql",
    pool: {
      max: 200,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};