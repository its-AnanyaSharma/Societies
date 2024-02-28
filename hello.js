const http = require('http');
const fs= require('fs')

app.use(express.static('public'));
const hostname = '127.0.0.1';
const port = 1444;
const login=fs.readFileSync('./login.html')
const signup=fs.readFileSync('./signup.html')
const server = http.createServer((req, res) => {
  console.log(req.url);
  url=req.url;
  res.statusCode =200;
  res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Content-Type', 'text/css');
  if(url=='/'){
    res.end(login);
  }
  else if (url=='/signup'){
    res.end(signup);
  }
 else{
    res.statusCode = 404;
    res.end("404 not found");
 }
  
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});