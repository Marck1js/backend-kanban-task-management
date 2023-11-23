const {models} = require('../../db');
const os = require('os');
const {Op} = require('sequelize');
const isNumber = require('../../helper/isNumber')
let {subtask} = models;


const subtaskCompleted = async(req,res)=>{
    

    let data = await subtask.findOne({ where: {title: {
        [Op.iLike]: 'welcome PAGe' //insensibilidad a mayúsculas y minúsculas
      }}})
    console.log(data);
    return res.send(data);
    
    // console.log(os.platform() == 'win32' && 'Windows 10');
    // let {subtaskId: id} = req.params

    // console.log(id);
    // if(!isNumber(id)) {
    //     return res.status(400).send({status: 400, msg: 'Error Params'})
    // }
    // const results = await subtask.findByPk(Number(id));

    // if(!results){
    //     return res.status(400).send({status: 404, msg: 'Id not found'});
    // }


    // if(results) {
    //     results.isCompleted = !results.isCompleted;
    //     await results.save();
    //     return res.send({
    //         msg: 'Field Update',
    //         isCompleted: results.isCompleted
    //     })
    // }

}

module.exports = subtaskCompleted;