import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { ref, set, push, onValue, remove, update } from "firebase/database";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [singleTodo, setSingleTodo] = useState({ title: "", desc: "", dueDate: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const todosRef = ref(db, `todos/${currentUser.uid}`);
        onValue(todosRef, (snapshot) => {
          const data = snapshot.val();
          setTodos(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
        });
      }
    });
  }, []);

  function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOutUser() {
    signOut(auth);
  }

  function addOrUpdateTodo() {
    if (!singleTodo.title.trim() || !singleTodo.desc.trim()) return;
    const todosRef = ref(db, `todos/${user.uid}`);
    if (editId) {
      update(ref(db, `todos/${user.uid}/${editId}`), singleTodo);
      setEditId(null);
    } else {
      push(todosRef, singleTodo);
    }
    setSingleTodo({ title: "", desc: "", dueDate: "" });
  }

  function deleteTodo(id) {
    remove(ref(db, `todos/${user.uid}/${id}`));
  }

  function editTodo(todo) {
    setSingleTodo({ title: todo.title, desc: todo.desc, dueDate: todo.dueDate });
    setEditId(todo.id);
  }

  return (
    <TodoContext.Provider value={{ user, todos, signIn, signOutUser, addOrUpdateTodo, deleteTodo, editTodo, singleTodo, setSingleTodo, editId }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}