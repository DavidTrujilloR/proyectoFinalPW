const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3009;

app.use("/", require("./routes/getUsers"));
app.use("/add", require("./routes/addUser"));
app.use("/edit", require("./routes/editUser"));
app.use("/delete", require("./routes/deleteUser"));

app.listen(port, () => {
  console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});
