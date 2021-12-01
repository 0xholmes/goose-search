import React, { createContext, useContext, useState } from "react"

const ResultContext = createContext()
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

export const ResultContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("Ethereum")

  const getResults = async type => {
    setIsLoading(true)

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    })
    const data = await response.json()

    if (type.includes("/news")) {
      setSearchResults(data.entries)
    } else if (type.includes("/images")) {
      setSearchResults(data.image_results)
    } else {
      setSearchResults(data)
    }

    setIsLoading(false)
  }

  return (
    <ResultContext.Provider
      value={{
        getResults,
        searchResults,
        isLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
