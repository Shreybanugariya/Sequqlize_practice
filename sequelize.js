const Sequelize = require('Sequelize')

const sequelize = new Sequelize({
    user: 'postgres',
    host: 'localhost',
    database: 'practiceDb',
    password: 'shrey@321',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch((error) => {
    console.log('Unable to connect to the database:', error);
});

module.exports = sequelize;