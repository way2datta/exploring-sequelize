// renamed
const express = require("express");
const app = express();
const port = 3000;
var models = require("./models");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  models.User.findAll().then(users => {
    res.json(users);
  });
});

app.post("/users", (req, res) => {
  models.User.create(req.body).then(u => {
    console.log("Auto-generated ID:", u.id);
    res.json(u);
  });
});

app.get("/users/:id", (req, res) => {
  models.User.findOne({ where: { id: req.params.id } }).then(user => {
    res.json(user);
  });
});

app.put("/users/:id", (req, res) => {
    models.User.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then((user) => {
        res.json(user);
      });
  });

  app.delete("/users/:id", (req, res) => {
    models.User.destroy({
        where: {
            id: req.params.id
        }
      }).then((user) => {
        res.json(user);
      });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
