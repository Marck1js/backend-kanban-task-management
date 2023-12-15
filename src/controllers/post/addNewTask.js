const {models} = require('../../db');
let {task,subtask,column,board} = models;

const addNewTask = async(req,res)=>{
                                    // []
    let {title,description,status,subtasksName} = req.body
    
    if(!title || !status) {
        return res.status(400).send({
            status: 'Error 404',
            msg: `data is missing`
        })
    }
    const data = await task.create({
        title,
        description,
        status,
        columnId: 1 
    }).then(e => e.id)
    console.log(data);

    if(subtasksName) {
        // console.log(subtasksName);
       await subtasksName.forEach(async (title)=> {
          await subtask.create({title, 
            isCompleted: false,
            taskId: data });
        })
       
        let output = {status: 'Ok', msg: 'Task and Subtasks Created successfully'};
        console.log(output)
        return res.status(200).send(output)
    }


    return res.status(200).send({status: 'Ok', msg: 'Task Created successfully'})

}

module.exports = addNewTask;