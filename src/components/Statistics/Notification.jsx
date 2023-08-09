import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Notification = ({ message }) => (
  <>
    <h3 className={css.message}>{message}</h3>
  </>
);

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
