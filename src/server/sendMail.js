const cloudmailin = require("cloudmailin");
const http = require("http");
let formidable = require("formidable");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    if(req.url == "/sendMail/test") {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, file) => {
            const USERNAME = "77af948c506dea73";
            const API_KEY = "4KAa5tosPJVwDobmYQ7QSuAd";
            const client = new cloudmailin.MessageClient({ username: USERNAME, apiKey: API_KEY});
            client.sendMessage({
                from: fields.email,
                to: "lutianye89@gmail.com",
                test_mode: false,
                subject: "new message from someone",
                tags: [
                    "api-tag",
                    "cloudmailin-tag"
                ],
                plain: fields.message,
                html: "<h1>Hello Html</h1>",
                headers: {
                    "x-api-test": "Test",
                    "x-additional-header": "Value"
                }
            });
        })
        res.write("done");
        res.end();
    } else {
        res.write(req.url);
        res.end();
    }
   
}).listen(8090);
