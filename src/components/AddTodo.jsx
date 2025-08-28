"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "@/features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addtodo(input));
    setInput("");
  };

  return (
    <div className="max-w-lg w-full mx-auto">
      {/* Header with gradient background matching Todos component */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl p-3 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-white">Add New Todo</h2>
      </div>
      
      {/* Form container with matching style */}
      <div className="bg-white rounded-b-xl p-6 shadow-md">
        <form
          onSubmit={addTodoHandler}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            className="flex-1 bg-gray-50 border border-gray-300 rounded-lg 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
            text-base outline-none text-gray-800 py-2 px-3 leading-6 
            transition duration-200 ease-in-out shadow-sm"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 
            rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 
            transition duration-200 ease-in-out"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;