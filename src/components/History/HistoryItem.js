import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ item }) => {
  return (
    <span className={ styles.HistoryItem }>
      { item.url }
    </span>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  }).isRequired
};

export default HistoryItem;
