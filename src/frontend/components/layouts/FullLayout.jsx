import React from 'react';
import Header from '../panels/Header';
import Footer from '../panels/Footer';

const FullLayout = ({ children }) => (
  <div id='app'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default FullLayout;
