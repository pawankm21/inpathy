import { HeartIcon, ShareIcon, BookmarkIcon } from "@heroicons/react/solid";
import React from "react";

function Post({message, likes, shares, bookmarks,image}) {
  return (
    <div className="lg:w-2/3 rounded-lg lg:ml-20 mt-4 mb-4 bg-white shadow-2xl ml-10">
      <div className="w-1/2  p-3">
        <img
          src={image}
          className="w-24 h-24 object-cover rounded-full  m-3"
          alt=""
        />
      </div>
      <div className="pl-5 pr-5 p-2">
        <p>
      {message}
        </p>

        <div className=" w-1/2 lg:ml-96">
          <button className="m-2 ">
            <HeartIcon className="h-6 w-6 text-red-500" />
          </button>
          <button className="m-2 ">
            <BookmarkIcon className="h-6 w-6 text-blue-500" />
          </button>
          <button className="m-2 ">
    
            <ShareIcon className="h-6 w-6 text-blue-500" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
