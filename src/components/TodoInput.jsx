import { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if input is not empty
    if (inputValue.trim() === '') {
      return;
    }

    // Call the function from App to add the todo
    onAddTodo(inputValue.trim());
    
    // Clear the input field
    setInputValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="הוסף משימה חדשה..."
        className="todo-input-field"
      />
      <button type="submit" className="add-button">
        הוסף +
      </button>
    </form>
  );
}

export default TodoInput;