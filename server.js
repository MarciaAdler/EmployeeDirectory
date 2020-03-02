const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("client/build"));

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
