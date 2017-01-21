import React, { Component } from 'react';
import Style from 'style-it';
import { browserHistory } from 'react-router';

export default class IndexMain extends Component {
  constructor(props) {
    super(props)
  }

  location() {
    browserHistory.push('/quiz')
  }

  render() {
    return (
      <div>
        <Style>
          {
            `
              .index-main-field {
                position: absolute;
                bottom: 0;
                top: 0;
                right: 0;
                left: 0;
                width: 80%;
                height: 50%;
                border: 1px solid #CCC;
                margin: auto;
              }
            `
          }
        </Style>
        <div className="index-main-field">
          <section>You can choose several type of quiz.Let's try it out.</section>
          <section>
            <button type="button" onClick={this.location}>Try it!</button>
          </section>
        </div>
      </div>
    )
  }
}
