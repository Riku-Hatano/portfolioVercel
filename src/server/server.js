let http = require("http");
let formidable = require("formidable");
let mysql = require("mysql");

const mysqlcon = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0822adgj",
    database:"test2",
    port:3306,
    socketPath:"/tmp/mysql.sock",
    insecureAuth:true
})
mysqlcon.connect((err) => {
    if(err) throw err;
})

http.createServer((req, res) => {
    // mysqlcon.connect();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); //mandatory, otherwise, CORS error will happen
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, file) => {
       
        let cmd = `insert into users (id, fname, lname) values (?, ?, ?)`;
        mysqlcon.query(cmd, [fields.id, fields.fname, fields.lname], (err, result) => {
            if(err)throw err;
            console.log(result);
        })
        // mysqlcon.end();
        res.write(fields.fname);
        res.end();
    })
}).listen(8089);