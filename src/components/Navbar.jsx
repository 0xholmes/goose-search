import React from "react"
import { Link } from "react-router-dom"

import Search from "./Search"

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap justify-center items-center">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="sm:text-2xl font-bold py-1 px-2 rounded dark:bg-gray-200 dark:text-gray-900 bg-yellow-600 text-white">
            Goosegle 🔍
          </p>
        </Link>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="focus:outline-none bg-white text-black sm:text-lg py-1 px-3.5 rounded-full border-black hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
