const connection = require("./connection");

const recuperarTasks = async () => {
  const tasks = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

module.exports = {
  recuperarTasks,
};
