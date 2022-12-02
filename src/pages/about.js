
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle={"About us"}>
      <title>About page</title>
      <h1>Welcome to the showroom!</h1>
      <Link to="/about">About page</Link>
      </Layout>

    </main>
  )
}


export default AboutPage