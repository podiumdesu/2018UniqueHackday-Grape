//server.js
let express = require("express");
let app = new express();
let server = require("http").createServer(app);
let io = require("socket.io").listen(server);
let bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

var register = require("./user/register");
var login = require("./user/login");
var edit = require("./user/edit");
var auth = require("./user/auth");
var config = require("./config/config");
const processData = require("./rsshub/processScript");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const rss = require("./rss/rss");
const {
  addScript,
  updateAllScripts,
  getAllScripts,
  removeScript
} = require("./rss/db");

//将 socket.io 绑定到服务器上，于是任何连接到该服务器的客户端都具备了实时通信功能。
server.listen(2333);
//Warning: express4.0 seperate the body-parser, so we need to config it.
app.set("secret", config.secret);
app.use(bodyParser.json({ limit: "1mb" })); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

console.log("hello, the server is running at port: 2333 , HAVE A NICE DAY! ");
app.post("/user/register", (req, res) => {
  register(req.body, result => {
    //注册成功
    if (result === "1") {
      res.write("200");
      res.end();
    }
    //注册失败
    if (result === "-1") {
      res.write("400");
      res.end();
    }
    //用户已注册
    if (result === "-2") {
      res.write("500");
      res.end();
    }
  });
});
app.post("/user/login", (req, res) => {
  login(req.body, result => {
    //登录成功
    // console.log(req.body)
    if (result === "1") {
      let token = jwt.sign(req.body, app.get("secret"), {
        expiresIn: 60 * 60 * 24
      });
      res.json({
        message: "200",
        token: token
      });
    }
    //密码错误
    if (result === "-2") {
      res.write("400");
      res.end();
    }
    //用户未注册
    if (result === "-1") {
      res.write("404");
      res.end();
    }
  });
});

app.post("/user/auth", (req, res) => {
  var token = req.body.token || req.headers["x-access-token"];
  auth(token, result => {
    if (result === "1") {
      console.log("登录成功");
      res.status(200);
      res.write("登录成功");
      res.end();
    } else if (result === "wrong pwd") {
      console.log("密码错误");
      res.status(400);
      res.write("密码错误");
      res.end();
    } else if (result === "fakepeople") {
      console.log("bad token");
      res.status(400);
      res.write("wrong authentication to this token");
      res.end();
    } else {
    }
  });
});

app.post("/user/edit", (req, res) => {
  if (req.body.pwd && req.body.ava) {
    //不可以同时修改，会爆炸！！！！！！！！
    // todo
    //密码和头像不可同时修改
    res.write("gg");
    res.end();
  }
  edit(req.body.user_info, req.body.pwd, req.body.ava, result => {
    if (result === "1") {
      //密码修改成功
      let user_info = req.body.user_info;
      let token = jwt.sign(user_info, app.get("secret"), {
        expiresIn: 60 * 60 * 24
      });
      res.json({
        message: "200",
        token: token
      });
    } else if (result === "2") {
      //头像修改成功
      res.write("201");
      res.end();
    } else if (result === "-1") {
      //密码修改失败
      res.write("500");
      res.end();
    } else {
      //头像修改失败
      res.write("501");
      res.end();
    }
  });
});

const scriptArr = [];
// {req.body.uploadScript, req.body.info}
app.get("/rsshub/getID", (req, res) => {
  res.write(
    JSON.stringify({
      bangumiUpdate: "b站订阅番剧",
      upSubmit: "Up主投稿",
      upDynamic: "Up主动态",
      weiboUser: "微博关注",
      // 参数: uid，用户 id，博主主页打开控制台执行
      //  /uid=(\d+)/. exec(document.querySelector('.opt_box .btn_bed').getAttribute('action-data'))[1] 获取
      juejin: "掘金",
      // 前端	Android	iOS	后端	设计	产品	工具资源	阅读	人工智能
      // frontend	android	ios	backend	design	product	freebie	article	ai
      jianshuWriter: "简书用户",
      //
      zhihuWriter: "知乎用户",
      // 用户id可在用户主页url中找到
      pixivRank: "pixiv周排名",
      // 【固定】week
      developerToutiao: "开发者头条",
      // 【固定】today
      toutiaoKeyword: "今日头条",
      // keyword : ai
      douyuStream: "斗鱼直播间",
      // 24422 斗鱼直播间号
      v2exPopular: "V2EX最新"
      // 【固定】latest
    })
  );
  res.end();
});

app.post("/rsshub/single", (req, res) => {
  // console.log(req.body)
  const { type, uid, other = [] } = req.body;
  addScript({ type, uid, other });
  rss(type, uid, ...other)
    .then(body => {
      res.write(JSON.stringify(body));
      res.end();
    })
    .catch(e => {
      console.log(e);
      res.end();
    });
});

app.get("/rsshub/all", (req, res) => {
  getAllScripts()
    .then(r => {
      res.write(JSON.stringify(r));
      res.end();
    })
    .catch(e => {
      throw e;
    });
});

app.delete("/rsshub/single", (req, res) => {
  const { uuid } = req.body;
  removeScript(uuid)
    .then(() => {
      res.write("ok");
      res.end();
    })
    .catch(e => {
      res.write(500);
      res.end();
      throw e;
    });
});

app.get("/rsshub/update", (req, res) => {
  updateAllScripts()
    .then(r => {
      res.write(JSON.stringify(r));
      res.end();
    })
    .catch(e => {
      throw e;
    });
});
