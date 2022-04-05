
// import PropTypes from 'prop-types';
import s from './Counter.module.css';

import React from 'react';

class Counter extends React.Component {

   state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      feedback: 0,
   }

   hendleGood = () => {
      this.setState(prevState => ({
         good: prevState.good + 1,
         total: prevState.good + 1 + prevState.neutral + prevState.bad,
         feedback: prevState.good * 100 / prevState.total
      }));
   }
   hendleNeutral = () => {
      this.setState(prevState => ({
         neutral: prevState.neutral + 1,
         total: prevState.good + 1 + prevState.neutral + prevState.bad,
         feedback: prevState.good * 100 / prevState.total
      }));
   }
   hendleBad = () => {
      this.setState(prevState => ({
         bad: prevState.bad + 1,
         total: prevState.good + 1 + prevState.neutral + prevState.bad,
         feedback: prevState.good * 100 / prevState.total
      }));
   };

   render() {
      return (
         <div className={s.counter}>
            <button type='button' className={s.counter_buttom_good} onClick={this.hendleGood}>Good</button>
            <button type='button' className={s.counter_buttom_neutral} onClick={this.hendleNeutral}>Neutral</button>
            <button type='button' className={s.counter_buttom_bad} onClick={this.hendleBad}>Bad</button>
            <p>Good:<span className={s.counter_value_good}> {this.state.good}</span></p>
            <p>Neutral:<span className={s.counter_value_neutral}> {this.state.neutral}</span></p>
            <p>Bad:<span className={s.counter_value_bad}> {this.state.bad}</span></p>
            <p>Total:<span className={s.counter_value_total}> {this.state.total}</span></p>
            <p>Positive feedback:<span className={s.counter_value_feedback}> {this.state.feedback} </span>%</p>
         </div>
      );
   }
}

export default Counter;