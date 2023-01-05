import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Featured = ({homePage, Logo}) => {
    return(
    <>
    <div className="ReferenceContainer">
      <h1 id="FeaturedGame" className="Title">
        Check out the first game here!
      </h1>
      <Link to="/xenoblade-chronicles">
        <GatsbyImage
          image={Logo}
          altText={homePage.picture2.altText}
          to="/xenoblade-chronicles"
        />
      </Link>
    </div>
    <div className="Video">
      <iframe
        width="928"
        height="522"
        src="https://www.youtube.com/embed/Yv8GhFFgoJo?autoplay=1&mute=1&controls=0&loop=1"
        title="Welcome to the world of Xenoblade Chronicles"
      ></iframe>
    </div>
    </>
    )
  }

  export default Featured;