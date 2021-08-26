import React from 'react'
import { FaMap, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Forms from '../../Components/Forms';
import IconSeperator from '../../Components/IconSeperator';

import './Contact.css';


const ContactScreen = () => {
    return (
        <div>
            <div className="row backgroundProductDetails">
                <div className="col-md-12 col-sm-12 col-xs-12 ">
                <h1 className="titleProductDetails" > Contacter Nous</h1>
                </div>
           </div>

           <h1>Notre <span>Adresse</span></h1>


          
            <IconSeperator/>


            <div className="container mt-5  adresse">
                <div className="row text-center">
                
                    <div className="col-md-4 ">
                       <FaPhoneAlt className="icon1 mb-4"/>
                        <p> 71658246  </p>
                    </div>

                    <div className="col-md-4 ">
                       <FaMap className="icon1 mb-4"/> 
                        <p>  Tunis 1003 </p>
                    </div>

                    <div className="col-md-4 " >
                       <MdEmail className="icon1 mb-4"/>
                        <p> Artisan_femme@gmail.com  </p>
                    </div>
                
                </div>
        
                 </div>

                 <Forms/>
        </div>
    )
}

export default ContactScreen;
