const { models } = require("../../db");
let { task, subtask, column, board } = models;

const addBoard = async (req, res) => {
  const { name, columns } = req.body;
  console.log(req.body);
  try {
    if (!name || name == "")
      return res.status(400).send({
        status: "error",
        msg: "name is missing",
      });
    const data = await board.create({ name }).then((e) => e.id);
    console.log(data);
    if (columns.length >= 1 && !columns.includes('')) {
      // console.log(columns);
      await columns.forEach(async (name) => {
        await column.create({ name, boardId: data });
      });

      
      let output = {
        status: "Ok",
        msg: "Board and Columns Created successfully",
      };
      console.log(output);
      return res.status(200).send(output);
    }
    console.log({ status: "Ok", msg: "Board Created successfully" });
    return res
      .status(200)
      .send({ status: "Ok", msg: "Board Created successfully" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = addBoard;
