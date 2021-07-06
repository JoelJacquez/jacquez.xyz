import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {

  return (
    <>
      <nav>
        <span>
          <Link to="/">
            <b>Joel</b>
            <b>Jacquez</b>
          </Link>
        </span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/">Portafolio</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;