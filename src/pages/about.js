import * as React from "react"
import Layout from "../components/layout"
import "./about.css"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About us"}>
        <title>About page</title>
        <div className="AboutTitleContainer">
          <h1 className="AboutTitle">About Us</h1>
          <div className="AboutContainer">
            <p className="About">
              I decided to make this project about Xenoblade Chronicles because
              the third game is coming out this year and I am still obsessed
              with it. But also because it's a series that means a lot to me as
              a person. Ever since I saw a playthrough of the first game in
              2014. Over time my love for the series only grew with every entry,
              this is one of the few series period where I can definetly say
              there are no bad entries whatsoever. I would also like to note
              that I know the styling doesn't look all too good. My forté isn't
              really in the front end of things yet, I've got many things to
              learn. While it was a difficult semester for me it was also one I
              learned a lot in. <br /> <br />
              -Bob Hereijgers
            </p>
            <StaticImage
              src="../images/Monolithsoft_logo.webp"
              alt="Monolithsoft Logo"
              placeholder="BLURRED"
              width={350}
              height={350}
            />
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default AboutPage
