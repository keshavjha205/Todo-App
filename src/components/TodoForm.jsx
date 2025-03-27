import { useTodo } from "../context/context";


export function TodoForm() {
    const { addOrUpdateTodo, singleTodo, setSingleTodo, editId } = useTodo();
    return (
      <div className="flex flex-col gap-4 bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-md">

        <input
         type="text" 
         placeholder="Title" 
         value={singleTodo.title} 
         onChange={(e) => setSingleTodo((prev) => ({ ...prev, title: e.target.value }))} 
         className="border border-gray-300 rounded-lg px-4 py-2 w-full" />


        <input 
        type="text" 
        placeholder="Description" 
        value={singleTodo.desc}
         onChange={(e) => setSingleTodo((prev) => ({ ...prev, desc: e.target.value }))} 
         className="border border-gray-300 rounded-lg px-4 py-2 w-full" />


        <input 
        type="date" 
        value={singleTodo.dueDate} 
        onChange={(e) => setSingleTodo((prev) => ({ ...prev, dueDate: e.target.value }))} 
        className="border border-gray-300 rounded-lg px-4 py-2 w-full" />

        <button onClick={addOrUpdateTodo} className="bg-blue-600 text-white px-4 py-2 rounded-lg">{editId ? "Update Todo" : "Add Todo"}</button>
      </div>
    );
  }
  