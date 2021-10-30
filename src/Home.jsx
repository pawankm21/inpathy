import React from "react";

function Home() {
  function handleClick() {
   window.location.href = "https://www.inpathy.com/";
  }
  return (
    <div className=" flex flex-col h-screen my-auto items-center bg-blue-400">
      <div className="bg-white absolute w-1/2 h-36  filter blur-3xl"></div>
      <div className="bg-blue-500 absolute w-full h-36  filter blur-xl"></div>
      <div className=" flex justify-center ">
        <img
          src="https://skyogafoundation.org/assets/images/silence.gif"
          alt=""
          className="w-64 h-auto z-0"
        />
      </div>

      <div className="  grid h-screen w-1/2 grid-cols-4 place-items-center  ">
        <button
          className="hover:-translate-y-4 transition duration-500 ease-in-out transform w-full bg-red-300 text-gray-100 text-lg rounded-none h-48 focus:border shadow-2xl rounded-tl-lg rounded-bl-lg "
          onClick={handleClick}
        >
          Mild Stress
          <img
            src={process.env.PUBLIC_URL + "/images/chevron.svg"}
            className="w-12 float-right"
            alt=""
          />
        </button>

        <button
          className="  relative hover:-translate-y-4 transition duration-500 ease-in-out transform w-full bg-red-500 text-gray-100 text-lg rounded-none h-48 focus:border-4  shadow-2xl "
          onClick={handleClick}
        >
          Moderate Stress
          <img
            src={process.env.PUBLIC_URL + "/images/chevron.svg"}
            className="w-12 float-right"
            alt=""
          />
        </button>

        <button
          className="hover:-translate-y-4 transition duration-500 ease-in-out transform h-48 w-full bg-red-700 text-gray-100 text-lg  rounded-none shadow-2xl  "
          onClick={handleClick}
        >
          Severe Stress
          <img
            src={process.env.PUBLIC_URL + "/images/chevron.svg"}
            className="w-12 float-right"
            alt=""
          />
        </button>

        <button
          className="  hover:-translate-y-4 transition duration-500 ease-in-out transform h-48 w-full bg-red-900 text-gray-100 text-lg rounded-none focus:border-4  rounded-tr-lg
         rounded-br-lg shadow-2xl  "
          onClick={handleClick}
        >
          See an Expert
          <img
            src={process.env.PUBLIC_URL + "/images/chevron.svg"}
            className="w-12 float-right inline"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Home;
