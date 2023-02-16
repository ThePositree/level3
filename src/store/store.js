import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todosReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "../services/todo";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);
