import express from "express";
import router from "./router.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log("server start"));
