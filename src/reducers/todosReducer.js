import { createSlice } from "@reduxjs/toolkit";

const todosStorage = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  todos: todosStorage ? todosStorage : [],
  findedTodos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const { todo } = payload;
      state.todos.push(todo);
    },
    removeTodo: (state, { payload }) => {
      const { idTodo } = payload;
      state.todos = state.todos.filter((item) => item.id !== idTodo);
      if (state.findedTodos) state.findedTodos = state.findedTodos.filter((item) => item.id !== idTodo);
    },
    changeCompleteTodo: (state, { payload }) => {
      const { idTodo } = payload;
      state.todos = state.todos.map((item) => {
        if (item.id == idTodo) item.isCompleted = !item.isCompleted;
        return item;
      });
      if (state.findedTodos)
        state.findedTodos = state.findedTodos.map((item) => {
          if (item.id == idTodo) item.isCompleted = !item.isCompleted;
          return item;
        });
    },
    editTodo: (state, { payload }) => {
      const { idTodo, newText, newDesc } = payload;
      const map = (item) => {
        if (item.id == idTodo) {
          item.text = newText;
          item.description = newDesc;
        }
        return item;
      };
      state.todos = state.todos.map(map);
      if (state.findedTodos) state.findedTodos = state.findedTodos.map(map);
    },
    searchTodo: (state, { payload }) => {
      const { textTodo } = payload;
      if (!String(textTodo)) {
        state.findedTodos = [];
        return state;
      }
      state.findedTodos = state.todos.filter((item) => {
        const inputValue = String(textTodo);
        return new RegExp(inputValue, "gi").test(item.text);
      });
    },
  },
});

export const { addTodo, removeTodo, changeCompleteTodo, editTodo, searchTodo } = todosSlice.actions;

export default todosSlice.reducer;
