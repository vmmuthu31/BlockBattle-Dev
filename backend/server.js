const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vairamuthu:vairamuthu@cluster0.2qcddvx.mongodb.net/BlockBattle"
);
const cors = require("cors");
app.use(cors());

const gameSchema = new mongoose.Schema({
  gameId: String,
  players: [{ userId: String, name: String }],
});

const Game = mongoose.model("Game", gameSchema);

app.post("/addPlayer", async (req, res) => {
  try {
    const { gameId, userId, name } = req.body;
    let game = await Game.findOne({ gameId });
    if (game) {
      const playerIndex = game.players.findIndex(
        (player) => player.userId === userId
      );
      if (playerIndex > -1) {
        game.players[playerIndex].name = name;
      } else {
        game.players.push({ userId, name });
      }
    } else {
      game = new Game({ gameId, players: [{ userId, name }] });
    }
    await game.save();
    res.send("Player added to game");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to get all players of a game
app.get("/getGamePlayers/:gameId", async (req, res) => {
  const { gameId } = req.params;
  const game = await Game.findOne({ gameId });
  if (game) {
    res.json(game.players);
  } else {
    res.status(404).send("Game not found");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
