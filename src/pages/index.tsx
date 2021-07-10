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
          <div className="page-header home-header ">
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
            <section className="aboutme-section">
              <section className="about-me">
                <h3>
                  About <span>Me</span>
                </h3>
                <p>
                  Hello! I’m Joel Jacquez. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean fermentum ullamcorper sem,
                  at placerat dolor volutpat ac. Duis nulla enim, condimentum
                  nec ultricies.
                </p>
              </section>
              <section className="contact-information">
                <ul className="info-list">
                  <li>
                    <span className="label">Age</span>
                    <span className="value">31</span>
                  </li>
                  <li>
                    <span className="label">Residence</span>
                    <span className="value">México</span>
                  </li>
                  <li>
                    <span className="label">Address</span>
                    <span className="value">Sinaloa, Mex</span>
                  </li>
                  <li>
                    <span className="label">e-mail</span>
                    <span className="value">
                      <a href="mailto:email@example.com">email@example.com</a>
                    </span>
                  </li>
                  <li>
                    <span className="label">Phone</span>
                    <span className="value">
                      <a href="tel:+526671534415">+52 6671534415</a>
                    </span>
                  </li>
                  <li>
                    <span className="label">Freelance</span>
                    <span className="value available">Available</span>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
