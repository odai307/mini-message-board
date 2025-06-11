const db = require("../db/queries");

const getAllMessages = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", {messages: messages})
}


const newMessage = (req, res) => {
    res.render("form")
}

const newMessagePost = async (req, res) => {
    const { username, message } = req.body;
    await db.addMessage(username, message);
    res.redirect("/");
}

const getMessageById = async (req, res) => {
    const messageId = req.params.id;
    const message = await db.getMessageById(messageId);
    console.log(message);

    if (!message) {
        return res.status(404).send("Message Not found");
    }
    return res.render("message", { message });
}


module.exports = {
    getAllMessages,
    newMessage,
    newMessagePost,
    getMessageById
}