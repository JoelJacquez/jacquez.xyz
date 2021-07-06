import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="siteTitle">
            Joel
            <span> Jacquez</span>
          </div>
          <ul className="navLinks">
            <li className="navItem">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/resume" activeClassName="active">
                Resume
              </Link>
            </li>
            <li className="navItem">
              <Link to="/portafolio" activeClassName="active">
                Portafolio
              </Link>
            </li>
            <li className="navItem">
              <Link to="/blog" activeClassName="active">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
