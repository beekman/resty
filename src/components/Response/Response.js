import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';
import ReactJson from 'react-json-view';

const Response = ({ response }) => {
  return (
    <div id='json' className={styles.Response}>
      <ReactJson src={ response } enableClipboard={false}/>
    </div>
  );
};

export default Response;
