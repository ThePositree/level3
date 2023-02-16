import { DBgetAllData, DBgetData, DBaddTodo, DBupdateTodo, DBdeleteTodo } from "../data.js";

class TodoServices {
  create(req, res) {
    try {
      const { todo } = req.body;
      const id = DBaddTodo(todo);
      todo.id = id;
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  getAll(req, res) {
    try {
      if (req.query.text !== undefined) {
        const arr = DBgetData(req.query.text);
        res.status(200).json(arr);
      } else {
        const data = DBgetAllData();
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  update(req, res) {
    try {
      const { todo } = req.body;
      const result = DBupdateTodo(todo);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ message: "item not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  delete(req, res) {
    try {
      const { todo } = req.body;
      const result = DBdeleteTodo(todo);
      if (result) {
        res.status(200).json({ result });
      } else {
        res.status(400).json({ message: "item not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const todoService = new TodoServices();
