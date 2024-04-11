import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT | 5050;

app.get("/", (req, res) => {
  return res.send(`
    <html>
        <body>
            <h1>Nodejs REST API</h1>
            <ul>
              <li>Developer: Eswar Krishna Maganti</li>
              <li>Skills: MERN, Python, AWS, Ansible, Terraform,Docker, Jenkins</li>
              <li>Email: maganti.ek@gmail.com</li>
              <li>GitHub: https://github.com/eswarmaganti/ </li>
            </ul>
        </body>
    </html>`);
});

app.listen(PORT, () => {
  console.log(`*** SERVER is running on PORT: ${PORT}`);
});
