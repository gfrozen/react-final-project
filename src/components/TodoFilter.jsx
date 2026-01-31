import './TodoFilter.css';

function TodoFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'active', label: 'פעילות' },
    { id: 'completed', label: 'הושלמו' }
  ];

  return (
    <div className="todo-filter">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;