import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';

const PersonDetail = () => {
    let { person_id } = useParams();

    const [personInfo, setPersonIfo] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPersonDetail = async () => {
        setLoading(true);
        await axios.get(`${process.env.REACT_APP_BASE_URL}${person_id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setPersonIfo(response.data)
                setLoading(false);
            }).catch((error) => {
                console.err(error);
            })
    }
    useEffect(() => {
        getPersonDetail()
    }, [person_id])
    return (
        <>
            {
                loading ? (<Loading />) : (
                    <>
                        <Container>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400${personInfo.profile_path}`} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card.Title>{personInfo.name} </Card.Title>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Biography:</b></pan> {personInfo.biography}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Birthday:</b></pan> {personInfo.birthday}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Deathday:</b></pan> {personInfo.deathday || 'null'}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Place of birth:</b></pan> {personInfo.place_of_birth}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Known for department:</b></pan> {personInfo.known_for_department}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <pan><b>Popularity:</b></pan> {personInfo.popularity}
                                    </p>
                                    <p style={{ textAlign: 'left', fontSize: 15 }}>
                                        <Link to="/">
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="lg">
                                                    Black
                                                </Button>
                                            </div>
                                        </Link>
                                    </p>
                                </Col>

                            </Row>
                            <br />
                        </Container></>
                )
            }
        </>


    )
}

export default PersonDetail