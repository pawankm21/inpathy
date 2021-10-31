import React from 'react'
import Menu from './Menu'
import {Link} from 'react-router-dom'
function Navbar(props) {
    return (
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left fixed sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full z-20 ">
        <div className="mb-2 sm:mb-0">
          <Link
            to="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            <img
              src="https://fontmeme.com/permalink/211029/e4a1e058a6d50a44d4b1e3044d723c98.png"
              alt="hardly-worth-it-font"
              className="w-36"
              border="0"
            />
          </Link>
        </div>
        <div className="">
          <Link
            href="/login"
            className="text-lg no-underline text-grey-darkest hover:text-blue-500 ml-2 inline "
          >
            <img
              src={process.env.PUBLIC_URL + "/images/login.svg"}
              className="w-8 inline"
              alt="login"
            />
          </Link>
          <Link
            href="/three"
            className="inline text-lg no-underline text-grey-darkest hover:text-blue-500 ml-2"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/profile.svg"}
              className="inline w-8"
              alt="profile"
            />
          </Link>
          <div className="inline text-lg no-underline text-grey-darkest hover:text-blue-500  ">
            <Menu ></Menu>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
