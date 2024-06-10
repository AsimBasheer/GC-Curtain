if (process.env.NODE_ENV !== "prodcution") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "ession",
    keys: ["key1", "key2"],
    maxAge: 3600000,
  })
);

const indexRouter = require("./routes/routes");

mongoose.connect(process.env.DATABASE_URL, {});

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
