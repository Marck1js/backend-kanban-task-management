const { app } = require("./app");
const PORT = process.env.PORT || 6500;
const { server, models } = require("./db");
const defaultData = require("./defaultData");

let { column, task, subtask, board } = models;

async function main() {
  try {
    await server.sync({ force: true });

    defaultData();

    app.listen(PORT);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  console.log(`Running on port ${PORT}...`);
}

main();
