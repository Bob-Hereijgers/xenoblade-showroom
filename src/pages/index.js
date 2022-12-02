
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home"}>
      <title>Home Page</title>
      <h1>Welcome to the showroom!</h1>
      <Link to="/about">About page</Link>
      </Layout>
    </main>
  )
}

export default IndexPage