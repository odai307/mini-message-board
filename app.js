const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})