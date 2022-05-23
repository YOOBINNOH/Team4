const express = require("express");
const app = express();
const port = 3000;
const mysql = require("./db/mysql.js");

// mysql.connect();

// route
const user = require("./user/user.js");
const category = require("./category/category.js");

// prefix
app.use("/api/user", user);
app.use("/api/category", category);


app.get('/',(req, res) =>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/list',(req, res) =>{
  res.sendFile(__dirname + '/list.html')
})

app.get('/wirting_success',(req, res) =>{
  res.sendFile(__dirname + '/list.html')
})

app.post('/wirting_success',(req, res) =>{
  res.sendFile(__dirname + '/list.html')
})

app.get('/login',(req, res) =>{
  res.sendFile(__dirname + '/login.html')
})

app.post('/login',(req, res) =>{
  res.sendFile(__dirname + '/login.html')
})

app.get('/login_success',(req, res) =>{
  res.sendFile(__dirname + '/list.html')
})

app.get('/register',(req, res) =>{
  res.sendFile(__dirname + '/register.html')
})

app.get('/writing',(req, res) =>{
  res.sendFile(__dirname + '/writing.html')
})




app.get("/user/:name/:age", function (req, res) {
  var params = req.params;
  console.log(params);

  mysql.query("select * from user", function (err, result) {
    if (err) console.log(err);
    else {
      console.log(result);
    }
  });
  res.send("User Name : " + params.name + " / User Age : " + params.age);
});

app.listen(3000, () => console.log("Server listens on port ", port, "..."));
