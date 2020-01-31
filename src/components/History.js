import React, { Component } from 'react';
import styles from './App.css';

const History = ({ history }) => {
  history.forEach(story => {

  });
  return (
    <aside className={ History.styles } >
      <h2>History</h2>
      <textarea />
    </aside>
  );
};

export default History;
