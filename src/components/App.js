import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Container from './Container'

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container />
        <Footer />
      </>
    );
  }
}
