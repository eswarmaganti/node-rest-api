import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT | 5050;

app.get("/", (req, res) => {
  return res.send(`
    <html>
        <body>
            <h1>Hello World from Node REST API</h1>
        </body>
    </html>`);
});

app.listen(PORT, () => {
  console.log(`*** SERVER is running on PORT: ${PORT}`);
});
