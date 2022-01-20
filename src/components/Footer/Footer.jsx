import React from 'react';
import './Footer.scss'

const footer = () => {
  return <footer className="footer">
      <div className="footer__icon"></div>
      <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Returns</li>
          <li>FAQ</li>
      </ul>
      <span>© 2022 Logoipsum. All  rights reserved</span>
  </footer>;
};

export default footer;
