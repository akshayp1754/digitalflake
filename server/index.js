const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(express.json());

const { connectDB } = require("./utils/db");
connectDB();
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productsRoutes = require("./routes/product");


app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productsRoutes);

app.get("/", (req, res) => {
  return res.json({ greetings: `Hare Krishna` });
});

app.listen(PORT, () => {
  console.log(`server started to ${PORT}`);
});
