import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className='="loading'>
    <Spinner
      as="span"

      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <b> Loading...</b>
  </div>

);

export default Loading;
