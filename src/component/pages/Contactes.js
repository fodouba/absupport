import React, { Component } from 'react';
import Form from './Form'
import './Contactes.css'

class Contactes extends Component {
    render() {
        return (
             <div>
                 <div className="cart">
                     <div className="card-title"> A.B. Support</div>
                     <div className="cart-body">
                         30 rue Abdou Chaïb, Maarif Palmier, 20000 Casablanca 
                     </div>
                     <div className="Cart-footer">
                        <div>Tél: +212 649 63 40 33</div> 
                         E-mail: absupport@gmail.com
                     </div>

                 </div>
                 <div>
                <Form />
                 </div>

             </div>
        );
    }
}

export default Contactes;