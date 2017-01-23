import React, {Component} from 'react';
import Style from 'style-it';

const Footer = () => {
  return (
    <footer>
      <Style>
        {
          `
            .footer {
              padding: 1rem;
              font-size: 1rem;
              background: #424242;
              color: #FFF;
              text-align: center;
            }
          `
        }

      </Style>
      <div className="footer">© 2017 takahiro-saeki, All rights reserved.</div>
    </footer>
  )
}

export default Footer;
