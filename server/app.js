const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("FitTrack Pro API"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
