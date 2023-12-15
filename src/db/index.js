require('dotenv').config();

const {Sequelize} = require('sequelize');
const {subtasks, tasks,columns, boards} = require('./models')
let {DBUSER,DBPASS,DBNAME,DBPORT} = process.env 


const sequelize = new Sequelize(`postgres://${DBUSER}:${DBPASS}@${DBPORT}/${DBNAME}`, {
    logging:  false,
    dialect: 'postgres'
});



subtasks(sequelize);
tasks(sequelize);
columns(sequelize);
boards(sequelize);

// Relaciones
const {subtask,task,column,board} = sequelize.models;

task.hasMany(subtask);
subtask.belongsTo(task);

column.hasMany(task,);
task.belongsTo(column);

board.hasMany(column);
column.belongsTo(board);    

module.exports = {
    server: sequelize,
    models: {subtask,task,column,board}
}