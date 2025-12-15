import React, { useState } from "react";
import Todo from "./Todo";

type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoApp() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTodo: Todos = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-950 p-2">
      <div className="w-[90%] max-w-[500px] p-4 bg-slate-900  shadow-md rounded-md">
        <h1 className="text-center text-white text-3xl">todos For The Day!</h1>
        <div className="flex gap-2 justify-center my-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="flex-[3] border-gray-500 outline-none border-2 p-2 focus:border-white placeholder-gray-500 text-white rounded-md"
            placeholder="Add Task"
          />
          <button
            onClick={addTask}
            className="flex-[1] bg-purple-800 text-white cursor-pointer hover:bg-purple-900 text-sm rounded-md"
          >
            Add Todo
          </button>
        </div>
        <div>
          <h1 className="text-center text-white text-xl">todos</h1>
          {todos?.length > 0 ? (
            <>
              {todos.map((todo) => {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
            </>
          ) : (
            <h1 className="text-center text-white text-xl my-4">
              All todos completed!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;