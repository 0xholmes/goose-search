import { useState } from "react"
import Navbar from "./components/Navbar"
import Switch from "./components/Switch"

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 bg-gray-200 dark:text-gray-200 text-black min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Switch />
      </div>
    </div>
  )
}

export default App
