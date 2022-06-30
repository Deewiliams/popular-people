import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';
import Search from '../Components/Search';

const ListImages = () => {
  const [actor, setActor] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPopularPeople = async () => {
    setLoading(true);
    await axios.get(`${process.env.REACT_APP_BASE_URL}popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        setActor(res.data.results);
        setLoading(false);
      }).catch((error) => {
        console.err(error);
      });
  };

  useEffect(() => {
    getPopularPeople();
  }, []);
  return (
    <>
      {loading ? (<Loading />) : (
        <>
          <Container>
            <Search />
            <br />
            <Row>
              {actor.map((person) => (
                <>
                  <Col key={person.id}>
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400${person.profile_path}`} />
                        <Card.Body>
                            <Card.Title>
                                {person.name}
                                {' '}
                              </Card.Title>
                            <Link to={`/personDetail/${person.id}`}>
                                <Button variant="primary">
                                    View Info
                                                </Button>
                              </Link>
                          </Card.Body>
                      </Card>
                    <br />
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ListImages;
