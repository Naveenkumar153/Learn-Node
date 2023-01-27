const fs = require('fs');

function requestHandler(req,res) {
      // console.log(req.url, req.method, req.headers,req.httpVersion)
      const url = req.url;
      const method = req.method;
      if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
          res.write(`
              <html>
                  <head><title>Form</title></head>
                  <body>
                      <form action='/message' method='POST'>
                          <input type='text' name='message'>
                          <button>Submit</button>
                      </form>
                  </body>
              </html>
          `);
         return res.end();
      }
  
      if(url == '/message' && method == 'POST'){
          const body = [];
          req.on('data', (chunk) => {
              console.log(chunk);
              body.push(chunk);
          })
  
          req.on('end', () => {
              const parsedBody = Buffer.concat(body).toString();
              const message    = parsedBody.split('=')[1];
              //fs.writeFileSync('message.txt', message); // sync 
              fs.writeFile('message.txt', message, err => { 
                  res.statusCode = 302;
                  res.setHeader('Location','/');
                  return res.end();
              }); //event driven approach
              
          })
      }
  
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
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText:'Hello Everyone'
// }
// module.exports.handler = requestHandler,
// module.exports.someText = 'Hello Everyone'


exports.handler = requestHandler;
