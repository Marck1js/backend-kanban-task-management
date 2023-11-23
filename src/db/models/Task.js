const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('task', {
        title: {
            type: DataTypes.STRING,
            get() {        
                const rawValue = this.getDataValue('title');
                return rawValue ? rawValue.charAt(0).toUpperCase() + rawValue.slice(1).toLowerCase() : null;
              }
        },
        description: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }   
    }, {
        timestamps: false       
    });
}