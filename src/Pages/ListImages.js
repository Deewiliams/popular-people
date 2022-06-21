import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';

const ListImages = () => {
    const [actor, setActor] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPopularPeople = async () => {
        setLoading(true);
        await axios.get("https://api.themoviedb.org/3/person/popular?api_key=d86a765007a6b298c10937969b0a8623")
            .then((res) => {
                setActor(res.data.results)
                setLoading(false);
            }).catch((error) => {
                console.err(error);
            })
    }

    useEffect(() => {
        getPopularPeople();
    }, [])
    return (
        <>
            {loading ? (<Loading />) : (
                <>
                    <Container>
                        <Row>
                            {actor.map((person) => (<>
                                <Col key={person.id}>
                                    <Card style={{ width: '13rem' }}>
                                        <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400${person.profile_path}`} />
                                        <Card.Body>
                                            <Card.Title>{person.name} </Card.Title>
                                            <Link to={`/personDetail/${person.id}`}>
                                                <Button variant="primary">
                                                    View Info
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>))}
                        </Row>
                    </Container>
                </>
            )}
        </>
    )
}

export default ListImages