const connection = require("../config/connection");
const { User, Thoughts, Reaction } = require("../models");
const { userData, thoughtsData, reactionData } = require("./data");




connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // await User.deleteMany({});
  await User.deleteMany({});
  await User.insertMany(userData);
  console.table(userData);

  // await Thoughts.deleteMany({});
  await Thoughts.deleteMany({});
  await Thoughts.insertMany(thoughtsData);
  console.table(thoughtsData);

  // await Reaction.deleteMany({});
  await Reaction.deleteMany({});
  await Reaction.insertMany(reactionData);
  console.table(reactionData);
});
