import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <>
        <h2>Statistics</h2>
        <ul className={css.list}>
          <li className={css.item}>
            Good:<p className={css.number}>{good}</p>
          </li>
          <li className={css.item}>
            Neutral:<p className={css.number}>{neutral}</p>
          </li>
          <li className={css.item}>
            Bad:<p className={css.number}>{bad}</p>
          </li>
          <li className={css.item}>
            Total:<p className={css.number}>{total}</p>
          </li>
          <li className={css.item}>
            Positive Feedback:
            <p className={css.number}>{positivePercentage}%</p>
          </li>
        </ul>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  positivePercentage: PropTypes.node,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
