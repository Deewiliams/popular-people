import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';


const ListImages = () => {
    const [actor, setActor] = useState([]);

    const getPopularPeople = async () => {
        await axios.get("https://api.themoviedb.org/3/person/popular?api_key=d86a765007a6b298c10937969b0a8623")
        .then((res) => {
            setActor(res.data.results)
            console.log(res.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getPopularPeople();
    },[])
    return (
        <Container>
            <Row>
                {actor.map((act) => (<>
                    <Col>
                    <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400${act.profile_path}`} />
                        <Card.Body>
                            <Card.Title>{act.name} </Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </>))}
            </Row>
        </Container>
    )
}

export default ListImages