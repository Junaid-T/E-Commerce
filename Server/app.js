const express = require("express");
const app = express();
const AppError = require("./Utilities/AppError");
const globalErrorHandler = require("./Controllers/errorController");
const userRouter = require("./Routes/userRoutes");
const orderRouter = require("./Routes/orderRoutes");
const productRouter = require("./Routes/productRoutes");
const cors = require("cors");

//Cors
const corsOptions = {
  origin: "http://localhost:3000",
  exposedHeaders: "token",
};
app.use(cors(corsOptions));

//Parse requests
app.use(express.json());

// Mount the routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/product", productRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, "404"));
});

app.use(globalErrorHandler);

module.exports = app;
