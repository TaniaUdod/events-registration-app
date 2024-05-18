const express = require("express");
const cors = require("cors");

const path = require("path");
require("dotenv").config();
const buildPath = path.join(__dirname, "build");

const eventsRouter = require("./src/backend/routes/eventsRouter.js");
const connectDB = require("./src/backend/config/connectDB.js");
const runCronJob = require("./src/backend/helpers/fetchAndSaveEventsCron.js");

const app = express();

app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const PORT = process.env.REACT_APP_PORT;
connectDB();
runCronJob();

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
