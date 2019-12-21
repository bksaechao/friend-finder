// Route to list of friends
const allFriends = require("../data/friends")

// Exporting to the server..
// =============================================================
module.exports = app => {
    // Route to the JSON list of all friends
    app.get("/api/friends", (req, res) => {
        res.json(allFriends)
    });

    // POST route to handle survey results
}