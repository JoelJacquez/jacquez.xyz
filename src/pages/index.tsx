import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <section className="page">
          <div className="page-header">
            <div className="photo-container">
              <figure className="photo">
                <StaticImage src="../images/photo.png" alt="" />
              </figure>
            </div>

            <div className="author-information-container">
              <div className="author-information">
                <div className="fullName">Joel Jacquez</div>
                <div className="title">Web Developer</div>

                <div className="social-links">
                  <a href="#">
                    <i className="twitter"></i>
                  </a>
                  <a href="#">
                    <i className="facebook"></i>
                  </a>
                  <a href="#">
                    <i className="instagram"></i>
                  </a>
                  <a href="#">
                    <i className="linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <h1>Welcome to my Gastby site!</h1>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
