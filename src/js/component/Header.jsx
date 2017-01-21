import React, { Component } from 'react';
import Style from 'style-it';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Style>
          {
            `
              .header {
                background: #d81b60;
                font-size: 1.5rem;
                text-align: center;
                color: white;
                padding: 1rem;
              }
            `
          }
        </Style>
        <header className="header">Style-it example</header>
      </div>
    )
  }
}
