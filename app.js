const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const morgan = require("morgan");

const app = express();

let v1 = "/api/v1";
const generalRouter = require("./app/api/v1/General/router");
const ProductRouter = require("./app/api/v1/Product/router");

app.use(express.static("public"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("common"));
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//   res.send("Hello World");
// });
app.use(`${v1}`, generalRouter);
app.use(`${v1}`, ProductRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
