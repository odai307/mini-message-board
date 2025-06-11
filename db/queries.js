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


module.exports = {
    getAllMessages,
    addMessage,
    getMessageById
}