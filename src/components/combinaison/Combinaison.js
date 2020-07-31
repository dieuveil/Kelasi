import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuCpt from '../menucpt/MenuCpt';
import './combinaison.css';
import CodeCpt from '../codecpt/CodeCpt';

function Combinaison(props) {
    return (
        <div id="cbs">
            <Container fluid>
               <Row id="Row">
                   <Col sm={{ size: 'auto', offset: 1 }} fluid><h2>React</h2>
                       <MenuCpt/>
                   </Col>
                   <Col fluid>
                       <CodeCpt/>
                   </Col>
               </Row>
            </Container> 
        </div>
    );
}

export default Combinaison;