import * as React from 'react';
import Layout from '../components/Layout';

// styles

// markup
const ResumePage = () => {
  return (
    <>
      <Layout>
        <section className="page">
          <div className="page-header resume-header">
            <h1>Resume</h1>
          </div>
          <div className="page-content">
            <p>
              I make this following the Gastby tutorial!!
              <span role="img" aria-label="Sunglasses smiley emoji">
                😎
              </span>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ResumePage;
