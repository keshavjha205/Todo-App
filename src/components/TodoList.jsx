import { useTodo } from "../context/context";
import { TodoItem } from "./TodoItem";

export function TodoList() {
    const { todos } = useTodo();
    return (
      <div className="mt-6 w-full max-w-md">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    );
  }
  