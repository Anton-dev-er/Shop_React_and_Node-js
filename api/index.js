const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const cardRouter = require("./routes/card")
const orderRouter = require("./routes/order")
const productsRouter = require("./routes/products")
const stripeRoute = require("./routes/stripe");
const cors = require("cors")


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connect OK"))
    .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/product", productsRouter)
app.use("/api/order", orderRouter)
app.use("/api/card", cardRouter)
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('localhost:5000');
})