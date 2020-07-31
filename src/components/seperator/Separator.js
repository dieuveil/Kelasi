import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './separator.css';

function Separator(props) {
    return (
        <div>
            <Jumbotron id="Container" fluid> 
               <h1 className="display-3">KELASI</h1>
               <p className="lead" id="mytext">Avec KELASI vous avez l'opprotunité d'apprendre La Programmation de façon simple et efficace. Vous pouvez aussi nous contacter si vous avez des questions relatives aux cours </p>
               <hr className="my-2" />
               <p>KELASI Offre Des Cours Dans Le Domaine Du Web, Nosql, Deep Learning </p>
           </Jumbotron>
            
        </div>
    );
}

export default Separator;