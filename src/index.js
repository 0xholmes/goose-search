import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { ResultContextProvider } from "./components/contexts/ResultContextProvider"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
