const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/models");

exports.register = async (req, res) => {
  const { username, password, email, number, isMinor } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
    email,
    number,
    isMinor,
  });
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    return res.status(401).json({ message: "Email already Exists" });
  }
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ userId: user._id }, "ecretkey", { expiresIn: "1h" });
  res.status(200).send({
    message: "Login successfull",
    status: "Success",
    data: {
      user: {
        id: user._id,
        email: user.email,
        number: user.number,
        isMinor: user.isMinor,
        username: user.username,
        token,
      },
    },
  });
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    // res.json(users);
    res.status(200).send({
      message: "User Fetched Successfuly",
      status: "Success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// app.get("/protected", async (req, res) => {
//   const token = req.headers["x-access-token"];
//   console.log(token);
//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }
//   jwt.verify(token, "ecretkey", (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     res.json({ message: "Welcome to the protected route" });
//   });
// });
