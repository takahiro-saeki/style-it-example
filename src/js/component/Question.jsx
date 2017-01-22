import React, {Component} from 'react';
import Style from 'style-it';
import Base from '../Base/Base';
import uuid from 'node-uuid';

export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Base />
        <div key={uuid.v4()}>{this.props.ques.title}</div>
        <ul>
          <li key={uuid.v4()}>{this.props.ques.answer}</li>
        </ul>
      </section>
    )
  }
}
