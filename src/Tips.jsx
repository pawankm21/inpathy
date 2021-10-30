import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Card from "./Card";
import './tips.css'
import Post from "./Post";
function Tips() {
  return (
    <>
      <div className=" bg-gradient-to-r h-full w-screen border-blue-900 from-blue-400 to-blue-600">
        <h1 className="text-black text-center mt-12 lg:mt-7 pt-4 text-2xl">
          Available Experts
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar lg:mt-5 m-5 mt-10  no-scrollbar">
          <ScrollContainer className="w-full">
            <div class="flex flex-nowrap m-5 ">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </ScrollContainer>
        </div>
        <div className=" bg-gradient-to-r from-blue-500 to-blue-800 w-full grid grid-col-1 place-items-center ">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default Tips;
