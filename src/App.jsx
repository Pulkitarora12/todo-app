import React, { useEffect } from "react";
import { useState } from "react";
import { Delete } from "lucide-react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleOnClick = () => {
    const upperInput = input.toUpperCase().trim();
    if (!upperInput) return;
    setTodos([...todos, upperInput]);
    setInput("");
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const deleteTodo = (e) => {
    let newTodos = todos.filter((todo, index) => index !== e);
    setTodos(newTodos);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center bg-gray-900">
      <h1 className="text-3xl font-semibold text-white mt-8">TODO App</h1>
      <div className="mt-10 w-1/2">
        <div className="my-5 w-full">
          <input
            className="border border-white p-4 rounded-2xl w-full text-2xl text-white"
            type="text"
            value={input}
            placeholder="Enter your todo here"
            onChange={handleInput}
          />
        </div>
        <div>
          <button
            className="w-full bg-white p-2 rounded-xl font-semibold hover:bg-slate-700 hover:text-white hover:text-2xl hover:shadow-xl focus:ring-4 focus:ring-blue-300"
            onClick={handleOnClick}
          >
            Add Todo
          </button>
        </div>
        <div>
          {todos[0] ? (
            todos.map((todo, idx) => (
              <div className="text-lg bg-zinc-800 rounded-md flex justify-between gap-4 mt-5 p-2 text-white">
                <p>{todo}</p> <Delete onClick={() => deleteTodo(idx)} />
              </div>
            ))
          ) : (
            <div className="text-lg bg-zinc-800 rounded-md flex justify-between gap-4 mt-5 p-2 text-white">
              There are no todos
            </div>
          )}
        </div>
        <div>
          <button
            className="w-full bg-red-400 p-2 rounded-xl font-semibold font hover:bg-red-800 hover:text-white hover:text-2xl hover:shadow-xl focus:ring-4 focus:ring-blue-300 mt-40"
            onClick={() => setTodos([])}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
