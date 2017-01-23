import React, {Component} from 'react';
import Base from '../Base/Base';
import Header from '../component/Header';
import QuizFooter from '../component/QuizFooter';
import questions from '../quizConfig';
import uuid from 'node-uuid';
import request from 'superagent'

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.optimize = this.optimize.bind(this);
    this.check = this.check.bind(this);
    this.optimize()
    this.state = {
      check: false,
      data: []
    }
  }

  optimize() {
    const url = `https://www.reddit.com/r/angular.json`;
    request.get(url, (err, res) => {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(this.fail(err))
        } else {
          resolve(this.setData(res.body.data.children))
        }
      })
    });
  }

  renderHTML() {
    return (
      <div>{this.state.data[0].title}</div>
    )
  }

  fail(data) {
    console.log(data)
  }

  setData(data) {
    this.setState({data: data, check: true})
    console.log(data)
  }

  check() {
    const list = [];
    if(this.state.check === true) {
      this.state.data.map((data, i) => {
        list.push(
          <div>
            <div>{data.data.title}</div>
            {(() => {
              switch (data.data.thumbnail) {
                case 'default':
                return <img src='http://placehold.it/150x150' />
                break;
                case 'self':
                return <img src='http://placehold.it/150x150' />
                break;
                default:
                return <img src={data.data.thumbnail} />
                break;
              }
            })()}
          </div>
        )
      })
    } else {
      return false
    }
    return list;
  }

  componentDidUpdate() {
    //this.check()
  }

  render() {
    return (
      <div>
        <Base />
        <Header />
        <div onClick={this.check}>check</div>
        {this.check()}
        <QuizFooter />
      </div>
    )
  }
}
