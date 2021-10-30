import React from "react";

import Card from "./Card";
function Tips() {
  return (
    <>
      <div>
        <h1 className="text-black text-center mt-20 lg:mt-10">
          Available Doctors
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar lg:mt-5 m-5 mt-10 ">
          <div class="flex flex-nowrap m-5 ">
            <div className="w-96 shadow-md">
              <Card />
            </div>
            <div className="w-96 shadow-md">
              <Card />
            </div>{" "}
            <div className="w-96 shadow-md">
              <Card />
            </div>{" "}
            <div className="w-96 shadow-md">
              <Card />
            </div>{" "}
            <div className="w-96 shadow-md">
              <Card />
            </div>{" "}
            <div className="w-96 shadow-md">
              <Card />
            </div>
          </div>
        </div>
        <div>
          <div className="w-1/2">
            <Card />
          </div>{" "}
          <div className="w-1/2">
            <Card />
          </div>{" "}
          <div className="w-1/2">
            <Card />
          </div>{" "}
          <div className="w-1/2">
            <Card />
          </div>
          <div className="w-1/2">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tips;
