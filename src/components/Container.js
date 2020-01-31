import React, { Component } from 'react';
import styles from './App.css';
import Deck from './Deck.js';
import History from './History.js';
export default class Container extends Component {
  state= {
    url:'',
    method: '',
    requestBody: '',
    response: [],
    historyItems: []
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ historyItems: [...this.state.historyItems]});
    makeFetch(this.state.url)
    .then(res => {
      this.setState({response:res});
    })
  }

  handleChange = ({target}) => {
    this.setState({ [target.name]: target.value});
  }

  render() {
    const {url, method, requestBody, response, historyItems} = this.state;
    
    return (
      <main className={ styles.Container }>
        <History />
        <Deck />
      </main>
    );
  }
}
