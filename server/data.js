let data = [];

export const DBgetAllData = () => data;

export const DBgetData = (text) => {
  if (!text) return [];
  return data.filter((item) => {
    return new RegExp(text, "gi").test(item.text);
  });
};

export const DBaddTodo = (todo) => {
  if (data.length) {
    const endTodo = data[data.length - 1];
    todo.id = endTodo.id + 1;
  } else {
    todo.id = 1;
  }
  data.push(todo);
  return todo.id;
};
export const DBupdateTodo = (todo) => {
  const findedTodoIndex = data.findIndex((item) => item.id === todo.id);
  if (findedTodoIndex !== -1) {
    data[findedTodoIndex] = todo;
    return data[findedTodoIndex];
  } else {
    return false;
  }
};
export const DBdeleteTodo = (todo) => {
  const findedTodoIndex = data.findIndex((item) => item.id === todo.id);
  if (findedTodoIndex !== -1) {
    return { ...data.splice(findedTodoIndex, 1) };
  } else {
    return false;
  }
};
