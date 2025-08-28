"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo } from "@/features/todo/todoSlice";
import { FiTrash2, FiCheckSquare, FiSquare, FiAward, FiClipboard } from "react-icons/fi";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [completedTodos, setCompletedTodos] = useState({});

  const toggleComplete = (id) => {
    setCompletedTodos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl p-5 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <FiAward className="text-yellow-300" />
          My Todo List
        </h2>
        <p className="text-blue-100 mt-1">
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'} total • 
          {Object.values(completedTodos).filter(Boolean).length} completed
        </p>
      </div>


      <div className="bg-white rounded-b-xl p-6 shadow-md">
        {todos.length === 0 ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FiClipboard className="text-blue-500 text-2xl" />
            </div>
            <p className="text-gray-600">No todos yet. Add one above to get started! 🚀</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                  completedTodos[todo.id] 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100 text-gray-800 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleComplete(todo.id)}
                    className="flex items-center focus:outline-none"
                  >
                    {completedTodos[todo.id] ? (
                      <FiCheckSquare className="text-green-600 text-xl" />
                    ) : (
                      <FiSquare className="text-blue-600 text-xl hover:text-blue-600 transition-colors" />
                    )}
                  </button>
                  <span className={`font-medium ${completedTodos[todo.id] ? 'line-through' : ''}`}>
                    {todo.text}
                  </span>
                </div>
                
                <button
                  onClick={() => dispatch(removetodo(todo.id))}
                  className="p-2 text-red-600 hover:text-red-500 rounded-full transition-colors duration-200 group"
                  aria-label="Delete todo"
                >
                  <FiTrash2 size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todos;