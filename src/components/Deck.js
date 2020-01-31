import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Deck = ({ onSubmit, onChange, url }) => {
  return (
    <section className={ styles.Deck }>
      <form onSubmit={ onSubmit }>
        <fieldset>
          <input type="text" className="wide" name="url" placeholder="URL" value={ url } onChange={ onChange } />
          <div id="methods">
            <label>
              <input type="radio" name="method" value="get" onChange={ onChange } />
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
            <label>
              <button>Go!</button>
            </label>
          </div>
        </fieldset>
        <section className="deck col-2">
          <div id="body">
            <textarea placeholder="Raw JSON Body" name="requestBody" disabled=""></textarea>
          </div>

        </section>
      </form>
    </section>
  );
};

Deck.propTypes = {
  onSubmit: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Deck;
