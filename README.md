# Todo App - React Task Manager

A full-featured todo list application built with React and Vite, demonstrating core React concepts including components, state management, props, events, and data persistence.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed/incomplete (toggle)
- ✅ Edit existing task descriptions
- ✅ Delete tasks
- ✅ Filter tasks (All / Active / Completed)
- ✅ Active task counter
- ✅ Clear all completed tasks at once
- ✅ Data persistence using LocalStorage

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Components Architecture

The application is structured into 5 main components:

- **App.jsx** - Main component that manages application state (todos, filter) and coordinates all child components
- **TodoInput.jsx** - Handles user input for adding new tasks with text validation
- **TodoList.jsx** - Displays the list of todos and renders TodoItem components for each task
- **TodoItem.jsx** - Represents a single todo item with edit, delete, and toggle completion functionality
- **TodoFilter.jsx** - Provides filtering buttons (All/Active/Completed) with visual active state indication
- **TodoStats.jsx** - Displays active task count and provides clear completed functionality

## Data Flow

- State flows down from App to child components via props
- Events flow up from child components to App via callback functions
- LocalStorage automatically syncs with state changes

## Known Limitations

- Browser accessibility warning for form fields (does not affect functionality)
- LocalStorage is limited to ~5MB of data
- No server-side persistence - data is stored locally in the browser

## Technologies Used

- React 19
- Vite
- CSS3
- LocalStorage API

## Project Structure
```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   ├── TodoInput.css
│   │   ├── TodoList.jsx
│   │   ├── TodoList.css
│   │   ├── TodoItem.jsx
│   │   ├── TodoItem.css
│   │   ├── TodoFilter.jsx
│   │   ├── TodoFilter.css
│   │   ├── TodoStats.jsx
│   │   └── TodoStats.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## License

This project was created as part of a React course assignment.