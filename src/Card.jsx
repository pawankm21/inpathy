import React from "react";
import Modal from "./Modal";
function Card({img, name,des}) {
  return (
    <>
      <div class="flex justify-center items-center ml-4 m-r-4 hover:scale-105 transform ease-in-out duration-500 ">
        <div class="w-96 h-64 rounded-xl bg-blue-900 flex flex-col shadow-2xl m-auto">
          <img
            class="w-36 h-36 object-cover rounded-full m-auto"
            src={img}
            alt="avatar"
          />
          <div class="text-center flex flex-col p-2">
            <span class="text-base capitalize text-white">{name}</span>
            <span class="text-xs italic text-blue-100 mb-2">
             {des}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
