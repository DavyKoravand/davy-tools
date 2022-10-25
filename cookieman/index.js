const header = "Set-Cookie: JSESSIONID=adokwkodawod";

const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());

console.log("started"); 
app.get('*', function (req, res) {
  console.log(JSON.stringify(req.cookies, null, 2));
  res.cookie("JSESSIONID", "HelloWorld", { expires: new Date(Date.now() + 900000)});
  res.send(JSON.stringify(req.cookies, null, 2));
})

app.listen(3005);