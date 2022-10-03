const express = require("express");
const tasksController = require("./controllers/tasks.controller");

const router = express.Router();

router.get("/api/tasks", tasksController.recuperarTasks);

module.exports = router;
