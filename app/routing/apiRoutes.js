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
    app.post("/api/friends", (req, res) => {
        const user = req.body;
        let bestScore = 0;
        let bestMatch = allFriends[0]



        for (let i = 0; i < allFriends.length; i++) {
            let totalScore = 0
            const currentFriend = allFriends[i];


            for (let i = 0; i < currentFriend.scores.length; i++) {
                const friendScore = parseInt(currentFriend.scores[i]);
                const userScore = parseInt(user.surveyScore[i]);

                totalScore += Math.abs(friendScore - userScore);
            }

            console.log(totalScore);

            if (totalScore < bestScore) {
                bestScore = totalScore
                bestMatch = currentFriend
            }
            
        }
        res.json(bestMatch);
        console.log(bestMatch);
    });

}
