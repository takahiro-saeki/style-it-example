import React, {Component} from 'react';
import Base from '../Base/Base';
import Header from '../component/Header';
import QuizFooter from '../component/QuizFooter';
import Question from '../component/Question';
import questions from '../quizConfig';

const sample = {
  title: 'tilte',
  answer: 'answer'
}

export default class Quiz extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Base />
        <Header />
        <Question ques={sample}/>
        <QuizFooter />
      </div>
    )
  }
}
