import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './codecpt.css'

import r_intro from '../img/react_introduction.png'



function CodeCpt(props) {

    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


    return (
        <div id="Limites">
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <h4>Theorie</h4>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <h4>Pratique</h4 >
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Introduction</h4><br/><br/>
              
             
            </Col>
          </Row>
          <Introduction />
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>      
     </div>
    );
}


const Introduction = () =>{
  return (
       <div id="introduction">

         <p id="paragraph2">
         React est une bibliothèque JavaScript déclarative, efficace et flexible pour construire des
          interfaces utilisateurs (UI). 
         Elle vous permet de composer des UI complexes à partir de petits morceaux de code isolés 
         appelés « composants = component en Anglais ».
         </p>
         <img src={r_intro} alt="img1" id="r_intro"/>


       </div>
  )
}

export default CodeCpt;