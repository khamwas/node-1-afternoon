const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const mc = require("./controllers/messages_controller");
const port = 3001;

const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build/"));

app.get("/api/messages", mc.getMessages);

app.post("/api/messages", mc.postMessages);

app.put("/api/messages/:id", mc.putMessages);

app.delete("/api/messages/:id", mc.deleteMessages);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
