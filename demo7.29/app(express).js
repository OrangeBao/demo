//1、导入express
const express = require("express");
//2\创建web服务器
const app = express();

var bodyParser = require("body-parser"); //首先要引入这个插件
app.use(
  bodyParser.urlencoded({
    //配置这两行代码
    extended: true,
  })
);
app.use(bodyParser.json()); //配置这两行代码
//4、监听客户端的GET请求，并向客户端响应具体的内容
app.get("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //调用express提供的res.send()方法，向客户端响应一个JSON对象
  res.send({
    date: "2022-07-30",
    name: "newFriend",
    state: "china",
    city: "beijing",
  });
});
//监听客户端的POST请求，并向客户端响应具体的内容
app.get("/sendData", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //调用express提供的res.send()方法，向客户端响应一个JSON对象
  res.send(req.query);
  // const result = req.query;
  // window.localStorage.setItem("savedata", JSON.stringify(result));
});
//托管静态资源
app.use(express.static("./dist"));
//监听
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
