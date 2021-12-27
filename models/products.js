const Sequelize = require('sequelize');
const models = require('../sequelize');
const User = require('./user')
  
const Product = models.define('products', {
    sProductName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    iPrice: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    sCategory: {
        type: Sequelize.STRING,
    },
    iUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
        allowNull: false,
    },
}, { sequelize: models, tableName: 'products' , modelName: 'Product'});

Product.sync();

User.hasMany(Product, { onDelete: 'cascade' });
Product.belongsTo(User);

module.exports = Product;