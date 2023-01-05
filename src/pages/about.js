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
              Cras id tortor quis eros laoreet condimentum vitae sed risus.
              Etiam eget malesuada libero. Aliquam interdum gravida ultricies.
              Vestibulum ultrices tempor sagittis. Cras ut pulvinar neque. Nunc
              ex dolor, porta a arcu eu, tincidunt euismod mauris. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Mauris euismod, turpis vel maximus fermentum,
              dolor nisi sodales nulla, vel fringilla odio magna vitae tortor.
              Nunc in volutpat felis. Aenean elementum elementum sapien id
              tincidunt. Donec at lacinia erat, bibendum ornare est. Sed
              elementum, justo id blandit venenatis, tortor risus feugiat lorem,
              ullamcorper eleifend nisl lectus ut quam. Mauris nec fringilla
              purus, sed iaculis purus. Curabitur rhoncus lectus elit, eu
              scelerisque urna fringilla in. Etiam ultrices ex quis viverra
              rhoncus.
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
