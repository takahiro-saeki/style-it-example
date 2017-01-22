import React, { Component } from 'react';
import Style from 'style-it';

const Base = () => (
  <Style>
    {
      `
        body {
          margin: 0;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
      `
    }
  </Style>
)

export default Base;
