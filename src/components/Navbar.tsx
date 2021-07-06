import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <>
      <nav>
        <span>
          <b>Joel</b>
          <b>Jacquez</b>
        </span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
