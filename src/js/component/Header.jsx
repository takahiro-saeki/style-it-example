import React, {Component} from 'react';
import Style from 'style-it';

const Header = () => {
  return (
    <header>
      <Style>
        {
          `
            .header {
              padding: 1rem;
              font-size: 1.5rem;
              background: #d81b60;
              color: #FFF;
              text-align: center;
            }
          `
        }

      </Style>
      <div className="header">style-it example</div>
    </header>
  )
}

export default Header;
