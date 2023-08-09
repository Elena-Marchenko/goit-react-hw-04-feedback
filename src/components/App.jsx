import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const total = stateValues.reduce((previous, current) => previous + current);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100;
    if (!total) {
      return 0;
    }
    return percentage.toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback" className={css.tittle}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}
export default App;
