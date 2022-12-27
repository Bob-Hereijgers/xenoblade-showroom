import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

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
    <div>
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <h1>{data.site.siteMetadata.title}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/xenoblade-chronicles">Xenoblade Chronicles</Link></li>
          <li><Link to="/xenoblade-chronicles-2">Xenoblade Chronicles 2</Link></li>
          <li><Link to="/xenoblade-chronicles-3">Xenoblade Chronicles 3</Link></li>
          <li><Link to="/xenoblade-chronicles-x">Xenoblade Chronicles X</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout