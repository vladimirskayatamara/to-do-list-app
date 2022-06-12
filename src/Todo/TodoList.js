import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

 function TodoList(props) {
  return (
    <ul style={styles.ul}>
        { props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}></TodoItem>
        }) }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}
//мы валидируем тип нашего компонента что он является массивом из объектов и подчеркиваем, что он обязательно нужен для работы этого компонента

export default TodoList;