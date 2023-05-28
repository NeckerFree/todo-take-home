import React from 'react';
import './App.css'
import { ITodos } from './Interfaces/interfaces';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App=() => {
  const [todos, setTodos] = React.useState<ITodos>({todos: []});
  const addTodos = (title: string) => { 
    setTodos({
      todos: [
        {title, completed: false, id: todos.todos.length+1}, 
        ...todos.todos
      ]
    });
  };
  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter(t => t.id !== id)
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    });
  }

  return (
    <div className="App">
      <AddTodo addTodos={addTodos} />
      <hr />
      <Todos 
        todos={todos} 
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos} />
    </div>
  );
}
export default App;