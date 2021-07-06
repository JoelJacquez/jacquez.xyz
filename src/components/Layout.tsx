import * as React from 'react';
import Navbar from './Navbar';
const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
