import React from 'react';
import './footer.css';
import { Container, Row, NavLink, Col } from 'reactstrap';
import img1 from '../img/mylogo2.png'

function Footer(props) {
    return (
        <div id="thefoot">
           
            <Container>
               <Row  id="Row2">
                 <Col id="Myleft1">
                 <img src={img1} alt="img1" id="img7"/>
                  </Col>
                 <Col id="Myleft3" fluid>
                   <h3>Contact</h3>
                    <p id="mytext2">kelasi37@gmail.com</p>
                    <p id="mytext2">+4915123285282</p>
                   </Col>
                 <Col id="Myleft" fluid>
                   <h3>Challenges</h3>
                   <p id="mytext3">
                     Fixer des Bugs
                     </p>
                  
                   </Col>
               </Row>
          </Container>
          </div>
    );
}

export default Footer;