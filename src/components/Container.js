import React, { Component } from 'react';
import styles from './App.css';
import Deck from './Deck.js';
import History from './History.js';

export default class Container extends Component {
  state = {
    url: '',
    method: '',
    requestBody: '',
    response: [],
    historyItems: []
  };

  handleSubmit = event => {
    event.preventDefault();

    return fetch(this.state.url)
      .then(res => res.json())
      .then(response => {
        this.setState(prevState => ({ ...prevState, response }));
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { url, method, requestBody, response, historyItems } = this.state;

    return (
      <main className={ styles.Container }>
        <History />
        <Deck onSubmit={ this.handleSubmit } onChange={ this.handleChange } url={ this.state.url } />
      </main>
    );
  }
}
