const pool = require("./pool");


async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY timestamp DESC");
    return rows;
}


async function addMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

async function updateMessage(id, newMessage) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    const userFound = rows[0];

    if (!userFound) {
        throw new Error(`Message with ID ${id} not found`);
    }

    await pool.query(
        "UPDATE messages SET message = $1 WHERE id = $2",
        [newMessage, id]
    );

}

async function deleteMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    const userFound = rows[0];

    if (!userFound) {
        throw new Error(`Message with ID ${id} not found`);
    }

    await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}


module.exports = {
    getAllMessages,
    addMessage,
    getMessageById,
    updateMessage,
    deleteMessage
}