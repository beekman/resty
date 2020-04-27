import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {

  const HistoryItems = history.map((item, i) => {
    return <li key={ i }>
      <HistoryItem item={ item } />
    </li >;
  });

  return (
    <aside className={ styles.History } >
      <h3>History</h3>
      <ul>
        { HistoryItems }
      </ul>
    </aside>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired
};

export default History;
