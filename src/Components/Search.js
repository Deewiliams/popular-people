import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');

  const search = async () => {
    await axios.get('https://api.themoviedb.org/3/search/person?api_key=d86a765007a6b298c10937969b0a8623')
      .then((response) => {
        console.log('serach info ', response.data);
      }).catch((error) => {
        console.log('error', error);
      });
  };

  const handleChanege = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    search();
  };
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={query}
          handleChanege={handleChanege}
          handleSearch={handleSearch}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};

export default Search;
