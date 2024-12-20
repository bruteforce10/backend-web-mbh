var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");
const cors = require("cors");
var app = express();

const v1 = "/api/v1";
const eventsRouter = require("./app/api/v1/events/router");
const imagesRouter = require("./app/api/v1/images/router");
const categoriesRouter = require("./app/api/v1/categories/router");
const directorysRouter = require("./app/api/v1/directorys/router");
const coverDirectorysRouter = require("./app/api/v1/cover-directorys/router");
const promosRouter = require("./app/api/v1/promos/router");
const articleRouter = require("./app/api/v1/articles/router");
const jumbotronRouter = require("./app/api/v1/jumbotron/router");
const searchRouter = require("./app/api/v1/search/router");
const sendEmail = require("./app/api/v1/send-email/router");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(`${v1}/cms`, eventsRouter);
app.use(`${v1}/cms`, imagesRouter);
app.use(`${v1}/cms`, categoriesRouter);
app.use(`${v1}/cms`, directorysRouter);
app.use(`${v1}/cms`, coverDirectorysRouter);
app.use(`${v1}/cms`, promosRouter);
app.use(`${v1}/cms`, articleRouter);
app.use(`${v1}/cms`, jumbotronRouter);
app.use(`${v1}/cms`, searchRouter);
app.use(`${v1}/cms`, sendEmail);

// catch 404 and forward to error handler
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
