const express = require("express");
const path = require("path");
//名前つけて、アクセス場所決める
const mainRoutes = require("./routes/main-routes");

// Setups
const app = express();
app.set("view engine", "ejs");
//viewsはデフォルトだからなくてもいい？
app.set("views", "views");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

// Route　ここで使用する
app.use(mainRoutes);

app.use((req, res) => {
  res.status(404).send("404-No");
});

// Server starts
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}...`));