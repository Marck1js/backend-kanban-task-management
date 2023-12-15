const { Op } = require("sequelize");
const { models } = require("../../db");
const reemplazarGuionPorEspacio = require("../../helper/replaceSpace");

let { task, subtask, column, board } = models;
const getAllBoards = async (req, res) => {
  let { boards } = req.query;

  if (!boards) {
    return res.send({ msg: "Boards not recieved" });
  }

  const results = await board.findOne({
    where: {
      name: {
        [Op.iLike]: reemplazarGuionPorEspacio(boards),
      },
    },
    include: [
      {
        model: column,
        as: "columns",
        attributes: ["id", "name"],
        include: [
          {
            model: task,
            as: "tasks",
            attributes: {
              exclude: ["columnId"],
            },
            include: [
              {
                model: subtask,
                as: "subtasks",
                attributes: {
                  exclude: ["taskId"],
                },
              },
            ],
          },
        ],
      },
    ],
  });

  if (!results) {
    return res.send({ msg: "Empty" });
  }

  res.send([results]);
};

module.exports = getAllBoards;
