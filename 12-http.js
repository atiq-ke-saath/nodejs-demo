const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write('Welcome to my NodeJs Homepage.');
//     res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage.");
    return;
  }

  if (req.url === "/about") {
    res.end("Here is the About");
    return;
  }

  res.end(
    `<h1>Oops</h1>
        <p>We can't seem to find the resource you are looking for.</p>
        <a href="/">back to home</a>
        `
  );
});

server.listen(8000);
