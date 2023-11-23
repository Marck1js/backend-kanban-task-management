const {models} = require('../../db');
let {task,subtask,column,board} = models;

const addBoard = async (req,res)=> {
    let {name,columnsName} = req.body

    if(!name) return res.status(400).send({
        status: 'Error 404',
        msg: "'name' is missing"
    });
    const data = await board.create({name}).then(e => e.id);
    if(columnsName) {
        // console.log(columnsName);
       await columnsName.forEach(async (name)=> {
          await column.create({name, boardId: data });
        })
       
        let output = {status: 'Ok', msg: 'Board and Columns Created successfully'};
        console.log(output)
        return res.status(200).send(output)
    }
        console.log({status: 'Ok', msg: 'Board Created successfully'})
    return res.status(200).send({status: 'Ok', msg: 'Board Created successfully'})
}

module.exports = addBoard;
