import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import css from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const total = good + bad + neutral;
  const percentage = ((good / total) * 100).toFixed();

  return (
    <>
      <Section title="Please leave feedback" className={css.tittle}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </Section>
    </>
  );
}

export default App;
