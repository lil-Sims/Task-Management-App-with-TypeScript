import { FaCheckCircle, FaTrash } from "react-icons/fa";
import React from "react";

type TodoProp = {
  todo: {
    id: number,
    text: string,
    completed:boolean
  };
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function Task({ todo, completeTodo, deleteTodo }: TodoProp) {
  return (
    <div className="my-4 flex justify-between bg-purple-900 p-2 rounded-md">
      <p
        className={`text-white ${
          todo.completed === true ? "line-through" : ""
        }`}
      >
        {todo.text}
      </p>
      <div className="flex items-center gap-2 text-xl cursor-pointer text-white transition duration-600">
        <FaCheckCircle
          className="hover:text-gray-200"
          onClick={() => completeTodo(todo.id)}
        />
        <FaTrash
          className="hover:text-gray-200"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}