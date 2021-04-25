const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () =>
  console.log(`
Listening on port ${PORT}
http://localhost:${PORT}/
`)
);

module.exports = app;
