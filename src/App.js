import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      
      <Container>
        <Row>
     
          {
            shoes.map((a,i) => {
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </Row>
      </Container>
     
    </div>
  );
}

function Card(props){
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width={'80%'} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
    </Col>
  )
}

export default App;
