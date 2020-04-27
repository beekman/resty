import React, { Component } from 'react';
import styles from './App.css';
import Deck from './Deck.js';
import History from './History/History';
import Response from './Response/Response';
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
    this.setState(prevState => ({
      ...prevState,
      historyItems: [
        ...prevState.historyItems,
        {
          url: this.state.url,
          method: this.state.method
        }
      ]
    }));

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
      <>
        <main className={ styles.Container }>
          <History history={ historyItems } className={styles.History} />
          <Deck onSubmit={ this.handleSubmit } onChange={ this.handleChange } url={ this.state.url } />
        </main>
        <Response response={ this.state.response } />
      </>
    );
  }
}
