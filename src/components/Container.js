import React, { Component } from 'react';
import styles from './App.css';
import Deck from './Deck.js';
import History from './History.js';
export default class Container extends Component {
  render() {
    return (
      <main className={ styles.Container }>
        <History />
        <Deck />
      </main>
    );
  }
}
