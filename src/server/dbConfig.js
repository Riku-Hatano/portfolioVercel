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

export default mysqlcon;