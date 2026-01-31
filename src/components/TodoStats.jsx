import './TodoStats.css';

function TodoStats({ todos, onClearCompleted }) {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);
  
  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span className="stats-count">
          {activeTodos.length} משימות פעילות
        </span>
        {completedTodos.length > 0 && (
          <button 
            className="clear-completed-btn"
            onClick={onClearCompleted}
          >
            נקה משימות שהושלמו ({completedTodos.length})
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoStats;