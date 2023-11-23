const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('column', {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false       
    });
}

