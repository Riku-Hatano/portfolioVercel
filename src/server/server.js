let http = require("http");
let formidable = require("formidable");
let mysql = require("mysql");

const mysqlcon = mysql.createConnection({
    host:"localhost",
    user:"lu",
    password:"",
    database:"test2",
    port:3306,
    socketPath:"/tmp/mysql.sock",
    insecureAuth:true
})
mysqlcon.connect((err) => {
    if(err) throw err;
})

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); //mandatory, otherwise, CORS error will happen
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
       
        let cmd = `insert into comments (username, comment) values (?, ?)`;
        mysqlcon.query(cmd, [fields.username, fields.comment], (err, result) => {
            if(err)throw err;
            console.log(result);
        })
        res.write(fields.username);
        res.end();
    })
}).listen(8089);