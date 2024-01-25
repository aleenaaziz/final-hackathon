const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/user", require("./routes/userRoute"));
app.use("/projects", require("./routes/projectsRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
   