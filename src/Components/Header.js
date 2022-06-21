import React from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import movie from '../image/movie.jpeg'


const Header = () => {
  return (
    <>
    <Container>
  <Row >
    <Col>
    <Card>
  <Card.Img variant="top" height={250} src={movie} />
  <Card.Body>
    <Card.Title>Popular people</Card.Title>
   
  </Card.Body>
</Card>
    </Col>
  </Row>
  <br />
 
</Container>

</>
  )
}

export default Header