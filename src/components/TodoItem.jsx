import { useTodo } from "../context/context";
import { MdDelete, MdEdit } from "react-icons/md";

export function TodoItem({ todo }) {
    const { deleteTodo, editTodo } = useTodo();
    return (
      <div className="flex flex-col gap-1 border border-gray-300 bg-white/80 rounded-lg p-4 shadow-md mb-2">
        <h1 className="text-lg font-semibold">{todo.title}</h1>
        <p>{todo.desc}</p>
        {todo.dueDate && <p className="text-sm">Due: {todo.dueDate}</p>}
        <div className="flex gap-2 mt-2">
          <button onClick={() => editTodo(todo)} className="text-blue-600"><MdEdit /></button>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-600"><MdDelete /></button>
        </div>
      </div>
    );
  }
  