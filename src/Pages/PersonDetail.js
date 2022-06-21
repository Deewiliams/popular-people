import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container,Card,Row,Col,Button } from 'react-bootstrap';


const PersonDetail = () => {
    let {person_id} = useParams();

    const [personInfo,setPersonIfo] = useState([]);
    console.log('getting',person_id);
  const getPersonDetail = async () => {
        await axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=d86a765007a6b298c10937969b0a8623`)
        .then((response) => {
            setPersonIfo(response.data)
            console.log("id",personInfo);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getPersonDetail()
    },[person_id])
  return (
    <>
     <Container>
     <Row xs={1} md={2}>
     <Col>
     <Card>
     <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w400${personInfo.profile_path}`} />

  <Card.Body>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
     </Col>
    <Col>
    <Card.Title>{personInfo.name} </Card.Title>
    {personInfo.biography} 
    also_known_as:{personInfo.also_known_as[0] || null}
    {personInfo.deathday}
    {personInfo.birthday}
    {personInfo.place_of_birth}
    {personInfo.popularity}
    {personInfo.known_for_department}
    </Col>
    
  </Row>
  {/* <Row >
    <Col>
    <Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row> */}
  <br />
 
</Container></>
  )
}

export default PersonDetail