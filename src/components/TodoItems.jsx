import React from "react";
import { MdOutlinePlaylistRemove, MdPlaylistAddCheck , MdOutlinePlaylistPlay } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";

const TodoItems = ({ todo, toggle, deleteTodo }) => {
  return (
    <div
      className="w-full flex items-center py-3 gap-2 border-b-1 border-b-white  cursor-pointer select-none "
      onClick={() => toggle(todo.id)}
    >
      {todo.isComplete ? (
        <MdPlaylistAddCheck className="size-8  text-green-500 " />
      ) : (
        <MdOutlinePlaylistPlay className="size-8  text-green-900 " />
      )}

      <p className= {`flex-1 font-bold text-black ${todo.isComplete ?"line-through" :"" }`} >{todo.text}</p>

      <MdOutlinePlaylistRemove className="size-7 text-red-500 hover:scale-110 transition-all " onClick={ () => deleteTodo(todo.id) } />
    </div>
  );
};

export default TodoItems;
