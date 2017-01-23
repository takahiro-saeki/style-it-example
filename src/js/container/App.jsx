import React, {Component} from 'react';
import Base from '../Base/Base';
import Header from '../component/Header';
import QuizFooter from '../component/QuizFooter';
import questions from '../quizConfig';
import uuid from 'node-uuid';
import request from 'superagent';
import Style from 'style-it';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.optimize = this.optimize.bind(this);
    this.check = this.check.bind(this);
    this.optimize();
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
          <div key={uuid.v4()} className="card">
            {(() => {
              switch (data.data.thumbnail) {
                case 'default':
                return <img src='http://placehold.it/150x150' key={uuid.v4()} />
                break;
                case 'self':
                return <img src='http://placehold.it/150x150' key={uuid.v4()} />
                break;
                default:
                return <img src={data.data.thumbnail} key={uuid.v4()} />
                break;
              }
            })()}
            <a href={data.data.url} target="_blank">
              <div className="desc" key={uuid.v4()}>{data.data.title}</div>
            </a>
          </div>
        )
      })
    } else {
      return false
    }
    console.log(Base)
    return list;
  }

  render() {
    return (
      <div>
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
                .card {
                  padding: '1rem';
                  border: 1px solid #CCC;
                  margin: 1rem auto;
                  border-radius: 1rem;
                  display: flex;
                  max-width: 1024px
                }
                .container {
                  max-width: 1024px;
                  width: 100%;
                  margin: 0 auto;
                }
                .desc {
                  padding: 0 1rem;
                }
              `
            }
          </Style>
        <Header />
        <div className="container">
          {this.check()}
        </div>
      </div>
    )
  }
}
