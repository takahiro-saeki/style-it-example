import React, {Component} from 'react';
import Header from '../component/Header';
import uuid from 'node-uuid';
import request from 'superagent';
import Style from 'style-it';
import Footer from '../component/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.optimize = this.optimize.bind(this);
    this.renHtml = this.renHtml.bind(this);
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
  }

  renHtml() {
    const list = [];
    if(this.state.check === true) {
      this.state.data.map((data, i) => {
        list.push(
          <a href={data.data.url} target="_blank" key={uuid.v4()}>
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
              <div className="desc" key={uuid.v4()}>{data.data.title}</div>
            </div>
          </a>
        )
      })
    } else {
      return false
    }
    return list;
  }

  render() {
    const maxWidth = '1024px';
    const transition = '.5s';
    return (
      <div>
        <Style>
          {
            `
            body {
              margin: 0;
            }
            a {
              color: #e91e63;
              text-decoration: none;
              transition: ${transition};
              -webkit-transition: ${transition};
            }
            a:hover {
              color: #FFF;
            }
            ul {
              margin: 0;
              padding: 0;
            }
            li {
              list-style: none;
            }
            .card {
              padding: 1rem;
              border: 1px solid #e91e63;
              margin: 1rem;
              border-radius: 1rem;
              display: flex;
              max-width: ${maxWidth};
              transition: ${transition};
              -webkit-transition: ${transition};
            }
            .card:hover {
              background: #e91e63;
              color: #FFF;
            }
            .container {
              max-width: ${maxWidth};
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
          {this.renHtml()}
        </div>
        <Footer />
      </div>
    )
  }
}
