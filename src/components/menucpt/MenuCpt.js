import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function MenuCpt(props) {
    return (
        <div>
            <ListGroup id="ListGroup" flush>
              <ListGroupItem disabled tag="a" href="#"><h3>Table des matières</h3></ListGroupItem>
              <ListGroupItem tag="a" href="#"><h5>Introduction</h5></ListGroupItem>
              <ListGroupItem tag="a" href="#"><h5>Morbi leo risus</h5></ListGroupItem>
              <ListGroupItem tag="a" href="#"><h5>Porta ac consectetur ac</h5></ListGroupItem>
              <ListGroupItem tag="a" href="#"><h5>Vestibulum at eros</h5></ListGroupItem>
            </ListGroup>
            
        </div>
    );
}

export default MenuCpt;