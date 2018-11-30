const  express = require('express');
const  bodyParser = require('body-parser');
const mysql      = require('mysql');
const  app = express();

//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'guoxiu',
  database : 'precis'
});
connection.connect();

//启用中间件，接受post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    //第一步：接受post过来的数据
    let tel = req.body.tel;
    let passwd = req.body.password;
        let sql = 'SELECT * FROM users WHERE tel = 143434342';
        connection.query(sql, tel, (err, result)=>{
            console.log(result);
            // 空数组 ：作为布尔值，是true
            if(result.length == 0){
                res.json({r:'用户不存在'}); //账号不存在
            }else if(passwd != result[0].passwd){
                res.json({r:'密码错误'}); //密码错误
            }else{
                res.json({r:'欢迎登录'});
            }
        });
});


app.get('/getkw', (req, res) => {
    //接收get过来的值
    let kw = req.query.kw;
    let sql = `SELECT * FROM pc WHERE kw LIKE "%${kw}%" LIMIT 50`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
});


app.get('/select', (req, res) => {
    //接收get过来的值
    let pid = req.query.id;
    let sql = `SELECT * FROM pro WHERE 1 LIMIT 3`;
    connection.query(sql, (err, results)=>{
        res.json(results);
    });
});
app.listen(3000,function(){
    console.log('服务器已启动！');
});