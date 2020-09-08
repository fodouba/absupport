import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/navbar/Navbar'
import AccueilUser from './component/pages/AccueilUser'
import Connexion from './component/pages/Connexion'
import Quinousomme from './component/pages/Quinousomme'
import NosPrestations from './component/pages/NosPrestations'
import NosEngagements from './component/pages/NosEngagements'
import Contactes from './component/pages/Contactes'
import DefaultPage from './component/pages/DeaultPage'

function App() {
  return (
    <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AccueilUser} />
            <Route exact path="/Connexion" component={Connexion} />
            <Route exact path="/Quinousomme" component={Quinousomme} />
            <Route exact path="/NosEngagements" component={NosEngagements} />
            <Route exact path="/NosPrestations" component={NosPrestations} />
            <Route exact path="/contactes" component={Contactes} />
            <Route component={DefaultPage} />
          </Switch>
    </div>

  );
}

export default App;
         

