// import React from 'react';
// import { Container,Row,Col } from 'react-bootstrap';

// export default function Cards() {
//   return (
//     <Container>
//         <Row>
//             <Col> 
//             <Cards>
//                 <Cards.Img src="https://f.nooncdn.com/mpcms/EN0001/assets/aedd6517-19b3-40fc-bbbe-16ad964b67c2.png"/>
//                 <Cards.Body>
//                     <Cards.Title>dfsf</Cards.Title>
//                     <Cards.Subtitle>fdf</Cards.Subtitle>
//                     <Cards.Text>sdffsd</Cards.Text>
//                 </Cards.Body>
//             </Cards>
//             </Col>
//         </Row>
//     </Container>
//   )
// }



// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '15rem' ,margin: "10px"}}>
      <Card.Img variant="top" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
      {/* <Card.Body>
        <Card.Title>Top Rated Products</Card.Title>
        <Card.Text>Get the best at the best price.</Card.Text>
      </Card.Body> */}
    </Card>
  );
}

export default BasicExample;
