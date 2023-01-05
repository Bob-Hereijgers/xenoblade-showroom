import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./layout.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <section className="Wrapper">
        <title>{data.site.siteMetadata.title} | {pageTitle}</title>
        <nav className="Navbar">
          <h1>
            <Link
              to="/"
              className="NavbarTitle"
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <div className="NavBox">
          <Link
            to="/about"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            About
          </Link>
          <Link
            to="/contact"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            Contact us
          </Link>
          <Link
            to="/games"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            List of Games
          </Link>
          </div>
        </nav>
      <section className="ContentWrapper">
        {children}
      </section>
      <div className="Footer">
        <div><p>Website made by Bob Hereijgers</p><p>Images belong to Nintendo™ & Monolithsoft™</p></div>
      </div>
    </section>
  )
}

export default Layout
