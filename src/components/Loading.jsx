import React from "react"
import Loader from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={550}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  )
}

export default Loading
