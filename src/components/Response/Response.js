import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';
import ReactJson from 'react-json-view';

const Response = ({ response }) => {
  return (
    <section>
      <ReactJson src={ response } enableClipboard={false}/>
    </section>
  );
};

export default Response;
