const {models} = require('../../db');
const {isNumber} = require('../../helper');
let {task,subtask,column,board} = models;

const boardById = async(req,res)=>{
    let {id} = req.params;
    
    if(!isNumber(id)) {
        return res.status(400).send({status: 400, msg: 'Error Params'})
    }

    const results = await board.findByPk(Number(id) ,
        {
        attributes: {
            exclude: 'id'
        },
       include: [{ 
        model: column, 
        as: 'columns',
        attributes: ['name'],
        include: [{
            model: task,
            as: 'tasks',
            attributes: {
                exclude: ['id','columnId']
            },
            include: [{
                model: subtask,
                as: 'subtasks',
                attributes: {
                    exclude: ['id','taskId']
                }    
            }]
        }]
       }]
    } 
    );
    
    if(results == null){
        return res.status(404).send({status: 404, mgs: 'null'})
    }

    res.send(results);
}

module.exports = boardById;