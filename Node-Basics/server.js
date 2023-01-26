const http = require('http');
const arch = require('process');
const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers,req.httpVersion)
    res.setHeader('Content-Type', 'text/html');
    res.write(
        `<html>
            <head><title>First server creation</title></head>
            <body>
                <h1>Hello Node :)</h1>
            </body>
         </html>
    `);
    res.end();
});

server.listen(3000);