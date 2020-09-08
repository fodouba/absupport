import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import image from '../../equie.jpg'
import './form.css'

class Quinousomme extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="media">
                <div className="media-middle">
                    <img className="media-object" src={image} alt="Une Equipe dynamique" width="100%" height="100%"/>
                </div>
                <div className="media-body mt-5">
                    <h4 className="media-heading">Une équipe dynamique, issue d'horizons diverses ,
                    avec plusieurs années d'expériences pour mener à bien vos projets de prospection téléphonique.</h4>
                    ...
                </div>     
                </div>
                
                 <div className="container" id="texContainer">
                     <h5>
                         Que ce soit dans le domaine des énergies renouvelables, de la Téléphonie ou des Assurances,
                         nous vous constituons une équipe à la taille de votre projet afin de répondre éfficacement à vos besoins.
                     </h5>
                         <h4>
                             Conscient de la nécessité d'une relation de confiance avec nos partenaires, 
                             la tenue de nos engagements est à la base de toutes nos stratégies.
                         </h4>
                     </div>   
            </div>
        );
    }
}

export default Quinousomme;