import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import movie from '../image/movie.jpeg';

const Header = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" height={200} src={movie} />
            <Card.Body>
              <h3>Popular people</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  </>
);

export default Header;
