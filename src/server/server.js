let http = require("http");
let formidable = require("formidable");
// import mysqlcon from "./dbConfig";
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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    switch(req.url) {
        case "/server/addcomment": 
            let form = new formidable.IncomingForm();
            form.parse(req, (err, fields, file) => {
                let cmd = `insert into comments (username, comment) values (?, ?)`;
                mysqlcon.query(cmd, [fields.username, fields.comment], (err, result) => {
                    if(err)throw err;
                    console.log(result);
                })
                res.write(fields.comment);
                res.end();
            })
            break;
        case "/server/getcomment":
            const dbComments = mysqlcon.query(
                "select * from comments",
                (err, results) => {
                    const resBody = JSON.stringify(results);
                    res.write(resBody);
                    res.end();
                }
            );

            //getCircularReplacer was copied from internet. learn WeakSet before use it.
            // const getCircularReplacer = () => {
            //     const seen = new WeakSet()
            //     return (key, value) => {
            //         if (typeof value === "object" && value !== null) {
            //             if (seen.has(value)) {
            //                 return
            //             }
            //             seen.add(value)
            //         }
            //         return value
            //     }
            // }
            break;
        case "/server/deletecomment":
            res.write("delete comment");
            res.end();
            break;
        case "/server/editcomment":
            res.write("edit comment");
            res.end();
            break;
        default:
            res.write("no maches");
            res.end();

    }
}).listen(8089);