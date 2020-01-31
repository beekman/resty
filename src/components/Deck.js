import React, { Component } from 'react';
import styles from './App.css';
export default class Deck extends Component {
  render() {
    return (
      <section className={ Deck.styles }>
        <form>
          <fieldset>
            <input type="text" className="wide" name="url" placeholder="URL" value="" />
            <div id="methods">
              <label>
                <input type="radio" name="method" value="get" />
                <span>GET</span>
              </label>
              <label>
                <input type="radio" name="method" value="post" /><span>POST</span>
              </label>
              <label>
                <input type="radio" name="method" value="put" /><span>PUT</span>
              </label>
              <label><input type="radio" name="method" value="patch" /><span>PATCH</span>
              </label>
              <label><input type="radio" name="method" value="delete" /><span>DELETE</span>
              </label>
              <label>
                <button type="submit">Go!</button>
              </label>
            </div>
          </fieldset>
          <section className="deck col-2">
            <div id="body">
              <textarea placeholder="Raw JSON Body" name="requestBody" disabled=""></textarea>
            </div>
            <div id="headers">
              <button>Headers</button>
              <div className="visible-false">
                <h2>Basic Authorization</h2>
                <input name="authusername" placeholder="Username" value="" />
                <input name="authpassword" type="authpassword" placeholder="Password" value="" />
              </div>
              <div className="visible-false">
                <h2>Bearer Token</h2>
                <input type="text" className="wide" name="authtoken" placeholder="Bearer Token" value="" />
              </div>
            </div>
        </section>
      </form>
    </section>
      
    );
  }
}
