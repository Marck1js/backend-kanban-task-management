const subtask = require('./Subtask');
const task = require('./Task');
const column = require('./Column');
const board = require('./Board');
module.exports = {
    tasks: task,
    subtasks : subtask,
    columns: column,
    boards: board
}