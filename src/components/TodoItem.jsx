import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todo-edit-input"
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="btn-save">
              ✓
            </button>
            <button onClick={handleCancel} className="btn-cancel">
              ✕
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="btn-edit">
              ✎
            </button>
            <button onClick={() => onDelete(todo.id)} className="btn-delete">
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;