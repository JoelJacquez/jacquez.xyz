import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../components/Layout";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <title>Home Page</title>
        <h1>Welcome to my Gastby site!</h1>
        <Link to="/about">About</Link>
        <p >
          I make this following the Gastby tutorial!!
          <span role="img" aria-label="Sunglasses smiley emoji"> 😎 </span>
        </p>

      </Layout>
    </>
  )
}

export default IndexPage
