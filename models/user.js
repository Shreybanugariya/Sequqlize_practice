const Sequelize = require('sequelize');
const models = require('../sequelize');
  
const User = models.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    emailId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
}, { sequelize: models, tableName: 'users' , modelName: 'User'});

User.sync();

module.exports = User;