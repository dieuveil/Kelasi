import React, { Component }  from 'react';
import './App.css';
import Header from './components/header/Header'
import Separator from './components/seperator/Separator';
import MenuCpt from './components/menucpt/MenuCpt';
import Combinaison from './components/combinaison/Combinaison';
import Footer from './components/footer/Footer';
import Ceinture from './components/ceinture/Ceinture';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CodecptR from './components/codecptR/CodecptR';
import Pagenotfound from './components/pagenotfound/Pagenotfound'



function App() {
  return (
      <BrowserRouter>
        <div className="App">

          <Header/>
          <Separator/>
          {/*<MenuCpt/>*/}

          <Switch>
            {/*<Route path="/" component={Home} exact={true} />
            <Route path="/shop" component={Shop} />*/}
            <Route path="/home" component={Combinaison} />
            <Route component={Pagenotfound} />
          </Switch>
          
          <Ceinture/>
          <Footer/>

          
          
        </div>
      </BrowserRouter>
  );
}

export default App;
