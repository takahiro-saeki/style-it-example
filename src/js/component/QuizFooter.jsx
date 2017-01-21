import React, { Component } from 'react';
import Style from 'style-it';

export default class QuizFooter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Style>
          {
            `
              .quiz-footer {
                background: #d81b60;
                font-size: 1.5rem;
                text-align: center;
                color: white;
                padding: 1rem;
                position: fixed;
                bottom: 0;
                width: 100%;
              }
            `
          }
        </Style>
        <footer className="quiz-footer">quiz-footer</footer>
      </div>
    )
  }
}
