import * as React from 'react';
import Navbar from './Navbar';
const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="main-content">{children}</div>
    </>
  );
};

export default Layout;
