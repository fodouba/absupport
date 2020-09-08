import React, { Component } from 'react';
import images from './../../casques.jpg'
import './nosprestations.css'

class NosPrestations extends Component {
    render() {
        return (
           <div className="container-fluid" id="prestations">
                  <div className="row">
                      <div className="col-sx-12 col-md-6 offset-3">
                          <h3 id="energies"> Energies Renouvelables</h3>
                    <ul className="list-group-primary">
                        <li className="list-group-item">Prise de rendez-vous Panneaux Photovoltaïque</li>
                        <li className="list-group-item">Prise de rendez-vous Pompe à chaleur</li>
                        <li className="list-group-item">Prise de rendez-vous isolation</li>
                        <li className="list-group-item">Qualification de fiches</li>
                        <li className="list-group-item">Création de trafic</li>
                    </ul>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sx-12 col-md-6 offset-3">
                          <h3 id="directes"> Ventes Directes </h3>
                    <ul className="list-group-primary">
                        <li className="list-group-item">Forfaits Mobiles tout opérateur</li>
                        <li className="list-group-item">Lignes ADSL tout opérateur</li>
                        <li className="list-group-item">Offres fibre optique tout opérateur </li>
                        <li className="list-group-item">Offres Assurances/ Mutuelle toute branche</li>
                    </ul>
                      </div>
                  </div>
                  {/* <div className="row">
                      <div className="col-sx-12 col-md-6 offset-3">
                          <h3> Ventes Directes </h3>
                    <ul className="list-group-primary">
                        <li className="list-group-item">Forfaits Mobiles tout opérateur</li>
                        <li className="list-group-item">Lignes ADSL tout opérateur</li>
                        <li className="list-group-item">Offres fibre optique tout opérateur </li>
                        <li className="list-group-item">Offres Assurances/ Mutuelle toute branche</li>
                    </ul>
                      </div>
                  </div> */}


                </div>
        );
    }
}

export default NosPrestations;