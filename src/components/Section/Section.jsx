import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <div className={css.section}>
      <h2 className={css.tittle}>{title}</h2>
      {children}
    </div>
  </>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
