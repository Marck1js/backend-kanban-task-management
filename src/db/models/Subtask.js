const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('subtask', {
        title: {
            type: DataTypes.STRING
        },
        isCompleted: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false       
    });
}