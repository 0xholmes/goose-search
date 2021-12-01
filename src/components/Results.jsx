import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import parse from "html-react-parser"

import { useResultContext } from "./contexts/ResultContextProvider"
import Loading from "./Loading"

const Results = () => {
  const {
    getResults,
    searchResults,
    isLoading,
    searchTerm,
  } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=25`)
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case "/search":
      return (
        <div className="px-2 sm:px-72 space-y-7 py-7">
          {searchResults?.results?.map(
            ({ cite, title, link, description }, i) => (
              <div key={i}>
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{cite?.domain}</p>
                  <p className="hover:underline text-xl text-yellow-600">
                    {title}
                  </p>
                </a>
                <p className="text-sm">
                  {description.length > 160
                    ? description.substring(0, 160) + "..."
                    : description}
                </p>
              </div>
            )
          )}
        </div>
      )
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {searchResults?.map(
            ({ image, link: { href, title } }, i) => (
              <a
                href={href}
                target="_blank"
                key={i}
                rel="noreferrer"
                className="sm:p-3 p-5"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      )
    case "/news":
      return (
        <div className="px-2 sm:px-72 space-y-7 py-7">
          {searchResults?.map(({ links, id, title, summary }) => (
            <div key={id}>
              <a
                href={links?.[0]?.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-xl text-yellow-600">{title}</p>
              </a>
              <div>{parse(summary)}</div>
            </div>
          ))}
        </div>
      )
    default:
      return (
        <div className="flex justify-center text-lg pt-7">
          <p>ERROR!</p>
        </div>
      )
  }
}

export default Results
