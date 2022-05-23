const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
const mysql = require("../db/mysql.js");

// mysql.connect();

app.get("/", (req, res) => res.send("Hello user js!"));

app.post("/signin", function (req, res) {
  var params = req.body;
  let id = params.id;
  let password = params.password;
  console.log(id, " ", password);
  let res_data;
  mysql.query(
    `insert into user values('${id}','${password}')`,
    function (err, result) {
      if (err) console.log(err);
      else {
        console.log(result);
        res_data = { result: "success" };
      }
    }
  );
  res.status(200);
  res.send(res_data);
});

app.post("/login", function (req, res) {
  var params = req.body;
  console.log(params);
  let id = params.id;
  let password = params.password;
  let res_data;

  mysql.query(
    `select * from user where id="${id}" and pw="${password}"`,
    function (err, result) {
      if (err) console.log(err);
      else {
        console.log(result);
        res_data = { result: "success" };
      }
    }
  );
  res.status(200);
  res.send(res_data);
});

app.get("/logout/:id", function (req, res) {
  var params = req.params;
  let id = params.id;
  console.log(id);

  mysql.query(`select id from user where id="${id}"`, function (err, result) {
    if (err) console.log(err);
    else {
      res_data = { result: "success" };
    }
  });
  res.status(200);
  res.send(res_data);
});

app.get("/category/:id", function (req, res) {
  var params = req.params;
  let id = params.id;
  let user_category_data = [];
  mysql.query(
    `select category_num from user_category_binding where id="${id}"`,
    function (err, result) {
      if (err) console.log(err);
      else {
        result.forEach((element) => {
          user_category_data.push(element.category_num);
        });
        // user_category_data = result["category_num"];
        console.log(user_category_data);
      }
    }
  );
  user_category_data.forEach((category_num) => {});

  res.send("id : " + id);
});

module.exports = app;
