import React, { useState, useEffect } from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>(() => {

    const storedTodos = localStorage.getItem("todos");

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      if(todo.completed){

        alert("this task is completed")

      }else{


        setEditingTodo(todo);
      }
    }
      
  };

  const handleSaveTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    setEditingTodo(null);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div >
      <h1 className="text-5xl text-white">To-Do App</h1>

      {!editingTodo ? (
        <>
          <div >
            <AddTodo onAdd={handleAddTodo} />
          </div>
          <TodoList
            todos={todos}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
            onToggleComplete={toggleCompleteTodo}
          />
        </>
      ) : (
        <EditTodo
          todo={editingTodo}
          onSave={handleSaveTodo}
          onCancel={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
};

export default App;
