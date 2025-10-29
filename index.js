import express from "express";
import request from "request";

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET = "https://shrill-term-963b.vipin9999999999vopin.workers.dev";

app.use((req, res) => {
  const url = TARGET + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
