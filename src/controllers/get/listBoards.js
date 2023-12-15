const { models } = require("../../db");

let { task, subtask, column, board } = models;
const listBoards = async (req, res) => {

  try {
    const results = await board.findAll();
    res.send(results);
    
  } catch (error) {
    res.send({error: error})
  }

};

module.exports = listBoards;
