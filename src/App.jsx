import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Function to add a new todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Unique ID
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle todo completion status
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit a todo
  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Function to filter todos based on current filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <div className="container">
        <h1>📝 מנהל משימות</h1>
        
        <TodoInput onAddTodo={handleAddTodo} />
        
        <TodoFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
}

export default App;