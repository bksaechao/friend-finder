const path = require("path");

// Exporting to the server..
// =============================================================
module.exports = app => {
    // Survey route
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default, catch-all route to homepage
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}