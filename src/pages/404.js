import React from "react"
import "../styles/global.scss"
import Video from "../conponents/video"

const Page404 = () => {
  return (
    <>
      <h1 className="text-center">404</h1>
      <Video ARwidth="16" ARheight="9">
        <iframe
          title="video"
          src="https://www.youtube-nocookie.com/embed/Qw9oX-kZ_9k?autoplay=1&mute=1&loop=1"
        ></iframe>
      </Video>
    </>
  )
}
export default Page404
