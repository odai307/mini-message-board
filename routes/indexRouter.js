const express = require("express");
const indexRouter = express.Router();
const messagesController = require("../controllers/messagesController");


indexRouter.get("/", messagesController.getAllMessages);
indexRouter.get("/new", messagesController.newMessage);
indexRouter.post("/new", messagesController.newMessagePost);
indexRouter.get("/message/:id", messagesController.getMessageById)

module.exports = indexRouter;