const { models } = require("../../db");
const os = require("os");
const { Op } = require("sequelize");
const isNumber = require("../../helper/isNumber");
let { subtask } = models;

const subtaskCompleted = async (req, res) => {
  let { id } = req.body;

  if (typeof id != "number") {
    return res.status(400).send({ status: 400, msg: "Send a number" });
  }

  const result = await subtask.findOne({ where: { id } });

  if (!result) {
    return res.status(400).send({ status: 400, msg: "ID not found" });
  }

  result.isCompleted = !result.isCompleted;
  await result.save();
  console.log(result.isCompleted);
  res.send({ msg: result.isCompleted ? "task done" : "pending task" });
};

module.exports = subtaskCompleted;

//     return res.send({
//         msg: 'Field Update',
//         isCompleted: results.isCompleted
