import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';

const Loading = () => {
  return (
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
   
  )
}

export default Loading