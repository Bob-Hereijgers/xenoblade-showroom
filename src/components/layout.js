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
              activeStyle={{
                color: "white",
              }}
              className="NavbarTitle"
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
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
            to="/xenoblade-chronicles"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            Xenoblade Chronicles
          </Link>
          <Link
            to="/xenoblade-chronicles-2"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            Xenoblade Chronicles 2
          </Link>
          <Link
            to="/xenoblade-chronicles-3"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            Xenoblade Chronicles 3
          </Link>
          <Link
            to="/xenoblade-chronicles-x"
            activeStyle={{
              color: "white",
              backgroundColor: "blue",
            }}
            className="NavbarItem"
          >
            Xenoblade Chronicles X
          </Link>
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
