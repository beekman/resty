import React, { Component } from 'react';
import styles from './App.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.Footer }>
        <section className={ styles.about }>
          This React app was created by <a href="https://benbeekman.com">Ben Beekman</a> and inspired by <a href="https://resty.netlify.com" target="_blank" rel="noopener noreferrer">RESTy</a>.
        </section>
      </footer>
    );
  }
}
