const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || "5000";

connectDB();
const app = express();

app.use(express.json());

app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/post", require("./routes/post"));

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
