import React from "react";

function Home() {
  function handleClick() {
   window.location.href = "https://www.inpathy.com/";
  }
  return (
    <div className=" flex flex-col h-screen my-auto items-center">
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sticky sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            <a href="#home">
              <img
                src="https://fontmeme.com/permalink/211029/e4a1e058a6d50a44d4b1e3044d723c98.png"
                alt="hardly-worth-it-font"
                className="w-36"
                border="0"
              />
            </a>
          </a>
        </div>
        <div>
          <a
            href="/one"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/login.svg"}
              className="w-8 inline"
              alt="login"
            />
          </a>
          <a
            href="/three"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/profile.svg"}
              className="inline w-8"
              alt="profile"
            />
          </a>
        </div>
      </nav>
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
            src={process.env.PUBLIC_URL + "/images/arrow.svg"}
            className="w-12"
            alt=""
          />
        </button>

        <button
          className="  relative hover:-translate-y-4 transition duration-500 ease-in-out transform w-full bg-red-500 text-gray-100 text-lg rounded-none h-48 focus:border-4  shadow-2xl "
          onClick={handleClick}
        >
          Moderate Stress
          <img
            src={process.env.PUBLIC_URL + "/images/arrow.svg"}
            className="w-12"
            alt=""
          />
        </button>

        <button
          className="hover:-translate-y-4 transition duration-500 ease-in-out transform h-48 w-full bg-red-700 text-gray-100 text-lg  rounded-none shadow-2xl  "
          onClick={handleClick}
        >
          Severe Stress
          <img
            src={process.env.PUBLIC_URL + "/images/arrow.svg"}
            className="w-12"
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
            src={process.env.PUBLIC_URL + "/images/arrow.svg"}
            className="w-12 h-auto"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Home;
