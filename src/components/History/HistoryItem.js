import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ item }) => {
  return (
    <section className={ styles.HistoryItem }>
      <p>
        { item.url }
      </p>
    </section>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  }).isRequired
};

export default HistoryItem;
