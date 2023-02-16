import { Router } from "express";
import { todoService } from "./services/TodoService.js";
const router = new Router();

router.get("/todo", todoService.getAll);
router.get("/todo/:id");
router.post("/todo", todoService.create);
router.put("/todo", todoService.update);
router.delete("/todo", todoService.delete);

export default router;
