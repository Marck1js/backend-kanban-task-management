const {models} = require('../../db');

let {task,subtask,column,board} = models;
const getAllBoards = async(req,res)=>{
    const results = await board.findAll({
       include: [{ 
        model: column, 
        as: 'columns',
        attributes: ['id','name'],
        include: [{
            model: task,
            as: 'tasks',
            attributes: {
                exclude: ['columnId']
            },
            include: [{
                model: subtask,
                as: 'subtasks',
                attributes: {
                    exclude: ['taskId']
                }    
            }]
        }]
       }]
    });
    res.send(results)
}

module.exports = getAllBoards;