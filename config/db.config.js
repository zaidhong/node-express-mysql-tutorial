const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PW,
    MYSQL_DB
} = process.env

module.exports = {
    HOST: MYSQL_HOST,
    USER: MYSQL_USER,
    PASSWORD: MYSQL_PW,
    DB: MYSQL_DB,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}