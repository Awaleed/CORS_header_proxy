const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 8080;

app.post("/api", (req, res) => {
  // return res.send();
  const url = new URL(req.body['url']);
  request = new fetch.Request(url);
  request.headers.set("Origin", new URL(url).origin);
  fetch(request)
    .then(async (response) => {
      let buffer = await response.buffer();
      res.set("Access-Control-Allow-Origin", url.origin);
      res.set("Vary", "Origin");
      res.set("content-type", response.headers['content-type'])
      res.send(buffer);
    });

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
