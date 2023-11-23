const {models} = require('../../db');

let {task,subtask,column,board} = models;

const amountBoards = async(req,res)=>{
    const results = await board.findAll({attributes: ['name']});
    res.send(results)
}

module.exports = amountBoards;