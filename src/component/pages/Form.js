import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './form.css'


class Form extends Component {
      constructor(props){
    super(props);
    this.state ={
        nom: 'pascal',
        Prenom: 'lankiane',
        Fonction: 'Manager',
        adresse: '15 rue de paris, saint-mouis Sénégal',
        mail: '',
        telephone: '0649634033',
        categorie: 'PV/PC',

        };
           function handleChange=()=> {
                e.preventDefault();
            let Nom = e.target.nom;
            let preNom = e.target.Prenom;
            let fonction = e.target.Fonction;
            let Adresse = e.target.adresse;
            let Mail = e.target.mail;
            let Telephone = e.target.telephone;
            let Categorie = e.target.categorie;
            let val = this.target.value;
            this.setState({
                [Nom]:
                [preNom]
                [fonction]
                [Adresse]
                [Mail]
                [Telephone]
                [Categorie], val
                });

        };
        const handleSubmit{
            // e.preventDefault();
            console.log("Bonjour")
        };

      };
    render() {
        return (
            <div className="container align-items-start text-green">
                <h3> Contactez-nous </h3>
                <form>
                    <label htmlFor="nom">
                        Nom: *
                    </label>
                    <input type="text" name="nom" id="nom" onChange={this.handleChange} />
                   
                    <label htmlFor="prenom">
                        Prénom: *
                    </label>
                    <input type="text" name="prenom" id="prenom" className="form-control" onChange={this.handleChange}></input>              
                   
                    <label htmlFor="Fonction">
                    Fonction: *
                    </label>
                    <input type="text" name="Fonction" id="Fonction" className="form-control" onChange={this.handleChange}></input>              
                   
                    <label htmlFor="adresse">
                        Adresse: *
                    </label>
                    <input type="text" name="adresse" id="adresse" className="form-control" onChange={this.handleChange}></input>              
                    
                    <label htmlFor="mail">
                        Adresse mail: *
                    </label>
                    <input type="text" name="mail" id="mail" className="form-control" onChange={this.handleChange}></input>              
                   
                    <label htmlFor="telephone">
                        téléphone: *
                    </label>
                    <input type="text" name="telephone" id="telephone" className="form-control" onChange={this.handleChange}></input>   
                   
                    <label htmlFor="categorie">
                        Catégorie: *
                    </label>
                    <input type="text" name="categorie" id="categorie" className="form-control" onChange={this.handleChange}></input>   
                    
                    
                    <Button className="btn-primary" onClick={this.handleSubmit}>Envoyer</Button>           
                </form>


                
            </div>
        );
    }
}

export default Form;