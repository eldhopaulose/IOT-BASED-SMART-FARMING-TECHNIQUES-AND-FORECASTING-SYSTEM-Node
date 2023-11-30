const mongoose = require("mongoose");

const mdModule = () => {
  const dbURI =
    "mongodb+srv://eldhopaulose0485:aleenaeldho_025@cluster0.4sjqm.mongodb.net/COVID_TRACER?retryWrites=true&w=majority";
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error(err);
  });
  db.once("open", () => {
    console.log("DB started successfully");
  });
};

module.exports = mdModule;
