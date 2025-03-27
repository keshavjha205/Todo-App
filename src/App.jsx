import React from 'react'
import { TodoProvider } from './context/context';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
