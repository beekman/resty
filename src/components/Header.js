import React, { Component } from 'react';
import styles from './App.css';
export default class Header extends Component {
  render() {
    return (
      <header className={ styles.Header }>
        <h1>RESTy ... the simple ReST Client</h1>
      </header>
    );
  }
}
