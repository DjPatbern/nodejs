const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
    <h1>WELCOME TO OUR HOME PAGE</h1>
    <a href="/about">About</a>
    `) 
  }
  else if (req.url === "/about") {
    res.end(`
    <h1>HERE IS OUR HISTORY PAGE</h1>
    <button>Click to save Docs</button>
    <a href="/">Home</a>
    `)
  }
else {
    res.end(`
    <h1>Oops</h1>
    <p>404 not found</p>
    <a href="/">Go Back</a>
    `)
}
})

server.listen(5000);
