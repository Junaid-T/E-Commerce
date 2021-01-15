const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({ path: "./config.env" });

//Database Connection
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Connect with mongoose
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful"));

// Server static assets if in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("Front-End/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Front-End", "build", "index.html"));
  });
}

//Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
