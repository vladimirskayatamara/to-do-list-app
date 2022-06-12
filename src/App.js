import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить рыбов" },
    { id: 2, completed: false, title: "Продать рыбов" },
    { id: 3, completed: false, title: "Показать рыбов" },
    { id: 4, completed: false, title: "Прогнать котов" },
    { id: 5, completed: false, title: "Позвать собак" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1>Список дел</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Дел нет!</p>
        )}
      </div>
    </Context.Provider>
  );
}

// <TodoList todos - название свой-ва которое принимает массив/  ={todos} - то что мы передаем в качве значения, в данном примере массив созданный выше>
export default App;
