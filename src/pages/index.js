import * as React from "react"
import Layout from "../components/layout"
import "./index.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

const IndexPage = ({
  data: {
    wpPage: { homePage },
  },
}) => {
  const Noah = getImage(homePage.picture1.localFile)
  //Image taken from Xenoblade Wiki, originally from Xenoblade Chronicles 3 made by Nintendo™ & Monolithsoft™
  const Mio = getImage(homePage.picture2.localFile)
  //Image taken from Xenoblade Wiki, originally from Xenoblade Chronicles 3 made by Nintendo™ & Monolithsoft™
  const Logo = getImage(homePage.featuredGame.localFile)
  //Image taken from Xenoblade Wiki, originally from Xenoblade Chronicles 3 made by Nintendo™ & Monolithsoft™
  return (
    <section>
      <div>
        <Layout pageTitle={"Home"}>
          <div className="HomepageTitleContainer">
            <h1 className="Title Item">Welcome to my Xenoblade Database!</h1>
          </div>
          <div className="HomepageDescriptionContainer">
            <div className="HomepageImage">
              <GatsbyImage image={Noah} altText={homePage.picture1.altText} />
            </div>
            <div>
              <p className="HomepageDescription Item">{homePage.description}</p>
              <div className="Item">
                <p className="HomepageDescription DescriptionLinkBox">
                  For more information visit the
                </p>
                <Link className="DescriptionLink" to="/about">About Page.</Link>
              </div>
            </div>

            <div className="HomepageImage">
              <GatsbyImage image={Mio} altText={homePage.picture2.altText} />
            </div>
          </div>
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
        </Layout>
      </div>
    </section>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "home-page" }) {
      homePage {
        picture1 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500, width: 280)
            }
          }
          altText
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500, width: 320)
            }
          }
        }
        description
        featuredGame {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 150, width: 460)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
