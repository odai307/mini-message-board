const db = require("../db/queries");

const getAllMessages = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", {messages: messages})
}


const newMessageGet = (req, res) => {
    res.render("createMessage", {
        title: "New Message",
        header: "➕ Add a New Message"
    })
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

const updateMessageGet = async (req, res) => {
    const id = req.params.id;
    const user = await db.getMessageById(id);
    res.render("updateMessage", {
        user: user,
        header: "Update User",
        title: "Update User"
    });
}

const updateMessagePost = async (req, res) => {
    const id = req.params.id;
    const newMessage = req.body.message;
    await db.updateMessage(id, newMessage);
    res.redirect("/");
}


const deleteMessage = async (req, res) => {
    const id = req.params.id;
    await db.deleteMessage(id);
    res.redirect("/");
}

module.exports = {
    getAllMessages,
    newMessageGet,
    newMessagePost,
    getMessageById,
    updateMessageGet,
    updateMessagePost,
    deleteMessage
}