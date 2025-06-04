const express = require("express");
const indexRouter = express.Router();



const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages})
});


indexRouter.get("/new", (req, res) => {
    res.render("form")
});

indexRouter.post("/new", (req, res) => {
    const { messageUser, messageText } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages[messageId];

    if (!message) {
        return res.status(404).send("Message Not found");
    }
    return res.render("message", {message});
})

module.exports = indexRouter;