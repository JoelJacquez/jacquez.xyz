import * as React from 'react';
import Layout from '../components/Layout';

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <title>Blog</title>
        <h1>Blog</h1>
        <p>
          I make this following the Gastby tutorial!!
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;
