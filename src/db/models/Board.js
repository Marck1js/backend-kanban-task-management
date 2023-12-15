const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board', {
        // id: {
        //     type: DataTypes.UUID,
        //     primaryKey: true,
        //     unique: true,
        //     defaultValue: DataTypes.UUIDV4
        //   },
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false       
    });
}

