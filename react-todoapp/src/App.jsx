/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-restricted-globals */
import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";


function App(props) {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.tasks);


  const FilterButton = (props) => {
    return (
      <button
        type="button"
        className="btn toggle-btn"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name)}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }


  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
    if (id === task.id) {
      return { ...task, completed: !task.completed };
    }
    return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => id !== task.id)
    setTasks(remainingTask);
  }

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      editTask={editTask}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
    <h1>TODO APP</h1>
      <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">
      {filterList}
    </div>
    <h2 id="list-heading">{headingText}</h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList}
    </ul>
  </div>
  );
}

export default App;