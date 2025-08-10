import React, { useEffect, useRef, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem("todos") ?JSON.parse(localStorage.getItem("todos")) : [] );

  const data = useRef();

  const addTodos = () => {
    const inputText = data.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    data.current.value = "";
  };

  const toggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="place-self-center border-2 w-[400px] h-[600px] p-12  rounded-3xl">
      {/* Başlık Kısmı */}
      <h1 className="text-3xl text-white font-semibold tracking-wider flex items-center gap-3 ">
        <FaClipboardList className="text-white text-5xl" />
        ToDo App
      </h1>

      {/* Ekleme Kısmın */}
      <div className="flex mt-6 border-2 rounded-[8px]">
        <input
          ref={data}
          type="text"
          className=" flex-1 font-bold outline-none ps-2 placeholder:text-white"
          placeholder="Yeni görev giriniz..."
        />
        <div
          className="bg-[#2F3436] p-1  border-s-2 rounded-e-[5px] flex justify-center items-center "
          onClick={() => addTodos()}
        >
          <MdPlaylistAdd className="size-7 hover:scale-110 transition-all text-white cursor-pointer " />
        </div>
      </div>

      <div className="mt-5">
        {todos.map((todo) => (
          <TodoItems
            todo={todo}
            key={todo.id}
            toggle={toggle}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
export default Todo;
