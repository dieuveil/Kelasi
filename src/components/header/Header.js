import React, { useState } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  //UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown
  
} from 'reactstrap';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle2 = () => setDropdownOpen(prevState => !prevState);

    return (
      <div>
      <Navbar light expand="lg" id="Navbar">
        <NavbarBrand id="black2">KELASI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Row>
            <Col xs="4" sm="3"><a id="black" href="#thefoot"><h4>Contact</h4></a></Col>
            <Col xs="4" sm="3"><NavLink id="black" to="/home"><h4>Librairie</h4></NavLink></Col>
            <Col sm="4"><NavLink id="black" to="/home"><h4>Technologies</h4></NavLink></Col>
            </Row>
          <Nav className="mr-auto" navbar>
            {/*<NavItem id="NavItem">
              <a id="black" href="/home"><h4>Contact</h4></a>
            </NavItem>
            <NavItem>
              <a id="black" href="/home"><h4>Librairie</h4></a>
            </NavItem>
            <NavItem>
              <a id="black" href="/home"><h4>Technologies</h4></a>
            </NavItem>*/}

            

           {/* <Dropdown isOpen={dropdownOpen} toggle={toggle2}>
              <DropdownToggle id="green" caret>
                Dropdown
              </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
            </Dropdown>*/}





            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="black" nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>*/}
          </Nav>
          
          <Dropdown id="Dropdown" isOpen={dropdownOpen} toggle={toggle2}>
              <DropdownToggle id="green" caret>
                Cours
              </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header><h4>Web</h4></DropdownItem>
            <DropdownItem>
            <NavLink to="/home" id="black22" activeClassName="is-active">React</NavLink>
            </DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22" >Reactstrap</a>
            </DropdownItem>
            <DropdownItem> 
            <a href="/components/" id="black22">Tester React</a>
            </DropdownItem>
            <DropdownItem> 
            <a href="/components/" id="black22">JavaScript</a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header><h4>IA</h4></DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">Deep Learning</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">NLP</a>
            </DropdownItem>

            <DropdownItem header><h4>Nosql</h4></DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">Pourdquoi NOSQL</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">Neo4j</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">Mongodb</a>
            </DropdownItem>
            <DropdownItem>
            <a href="/components/" id="black22">Cassandra</a>
            </DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Header;