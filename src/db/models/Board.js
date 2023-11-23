const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board', {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false       
    });
}

