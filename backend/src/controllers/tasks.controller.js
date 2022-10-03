const tasksModel = require("../models/tasks.model");

const recuperarTasks = async (req, res) => {
  return res.status(200).json(await tasksModel.recuperarTasks());
};

module.exports = {
  recuperarTasks,
};
