const path = require("path");
const router = require("express").Router();

//Api Routes

// /api route
router.use("/api", (req, res) => {
  res.send("This is your /api route");
});

// If no api routes are hit, send them to the React App
router.use((req,res) => 
  res.sendFile(path.join(__dirname, "../client/build.index.html"))
);