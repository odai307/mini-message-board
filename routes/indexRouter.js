const express = require("express");
const indexRouter = express.Router();
const messagesController = require("../controllers/messagesController");


indexRouter.get("/", messagesController.getAllMessages);
indexRouter.get("/new", messagesController.newMessageGet);
indexRouter.post("/new", messagesController.newMessagePost);
indexRouter.get("/message/:id", messagesController.getMessageById);
indexRouter.get("/:id/update", messagesController.updateMessageGet);
indexRouter.post("/:id/update", messagesController.updateMessagePost);
indexRouter.post("/:id/delete", messagesController.deleteMessage);

module.exports = indexRouter;