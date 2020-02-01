import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Deck = ({ onSubmit, onChange, url }) => {
  return (
    <form className={ styles.Deck } onSubmit={ onSubmit }>
      <input type="text" className="wide" name="url" placeholder="URL" value={ url } onChange={ onChange } />
      <div id="methods">
        <label>
          <input type="radio" name="method" value="get" onChange={ onChange } defaultChecked />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" onChange={ onChange } /><span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" onChange={ onChange } /><span>PUT</span>
        </label>
        <label><input type="radio" name="method" value="patch" onChange={ onChange } /><span>PATCH</span>
        </label>
        <label><input type="radio" name="method" value="delete" onChange={ onChange } /><span>DELETE</span>
        </label>
        <button>Go!</button>
      </div>
      <div className="col-2">
        <textarea placeholder="Raw JSON Body" name="requestBody"></textarea>
      </div>
      <div className="col-2">
        <button>Headers</button>
        <h3>Basic Authorization</h3>
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
        <h3>Bearer Token</h3>
        <input name="bearer_token" placeholder="Bearer Token" className="wide" />
      </div>
    </form>
  );
};

Deck.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Deck;
