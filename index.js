const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/log", (req, res) => {
  const { type, message } = req.body;

  switch (type) {
    case "info":
      console.log(`INFO: ${message}`);
      break;
    case "error":
      console.error(`ERROR: ${message}`);
      break;
    case "warning":
      console.warn(`WARNING: ${message}`);
      break;
    case "debug":
      console.debug(`DEBUG: ${message}`);
      break;
    default:
      return res.status(400).json({ error: "Invalid log type" });
  }

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
