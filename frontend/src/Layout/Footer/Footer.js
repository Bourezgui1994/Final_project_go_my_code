import React from 'react'
import { FaPhoneAlt ,FaMap,FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import './Footer.css';
import {Link} from "react-router-dom";



const Footer = () => {

    return (
       

            <footer class="mt-5">
        
                <div class="container-fluid text-white bg-dark mt-5 "> 

                <div class="row">

                    <div class="col-md-4 mt-3">
                    
                        <div className="col-md-12 col-sm-12 col-xs-12 mb-5"> 
                        
                            <h5> VISITER NOTRE BOUTIQUE</h5>
                            
                            <hr className="ligne0" />
                        </div>
                        <p> Artisan-femme vous offre des produits de bonne qualité et avec des prix raisonnable </p>
       
                        <div className="col-md-12">
                            <div className="row">
                            <div className="col-md-2 "> <FaPhoneAlt className="icon"/> </div>
                            <div className="col-md-10"> <p>71658246</p></div>
                            </div>
                        </div>
                       
                        <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2"> <FaMap className="icon"/>  </div>
                            <div className="col-md-10"> <p>Avenue Hbib borguiba Tunis 1003</p></div>
                        </div>
                        </div>

                        <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2"> <MdEmail className="icon"/> </div>
                            <div className="col-md-10">
                            artisan@gmail.com  
                            </div>
                        </div>
                        </div>


                    </div>


                    <div className="col-md-4 mt-3">

                       <div className="col-md-12 col-sm-12 col-xs-12 mb-5"> 
                            <h5> LIEN UTILE</h5>
                            <hr className="ligne0" />
                      </div>
                 
                        <Link to={'/'} className="text-light py-1"> Nouveaux produits  </Link>  <br />
                        <Link to={'/LocalProductScreen'} className="text-light py-1"> Boutique  </Link>  <br />
                        <Link to={'/'} className="text-light py-1"> Card  </Link>  <br />
                        <Link to={'/'} className="text-light py-1"> Contact  </Link>  <br />

            
                    </div>



                    <div className="col-md-4 mt-3">
                        <div className="col-md-12 col-sm-12 col-xs-12 mb-5"> 
                            <h5> ENTRER EN CONTACT</h5>
                            <hr className="ligne0" />
                        </div>
                        <p>Nous sommes toujours prêts à répondre à toutes vos questions 
                            ou à vous aider à sélectionner votre meilleur choix.</p>

                        <div >
                            <button type="button" className="btn btn-warning btn-md" style={{borderRadius: '100px', fontWeight: 'bold', color: 'white'}}> Visiter notre boutique</button> 
                            <button type="button" className="btn btn-secondary btn-md" style={{borderRadius: '100px', fontWeight: 'bold'}}> Contacter-nous </button> 
                        </div>
                        <div className="btn-lg" >
                            <FaFacebook className="socialBtn"/>
                            <FaTwitter className="socialBtn"/>
                            <FaInstagram className="socialBtn"/>
                            <FaYoutube className="socialBtn"/>
                        </div>
                   </div>
        
                 
                

                </div>

                <hr className="ligneFooter " />
                  <div className="footerBottom">
                   <div className="container text-center">
                       <div className="row">

                            <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="copyright">
                                <p> Copyright © 2020 <Link to={'/'} >  Artisan-femme </Link>  All Rights Reserved
                                </p>
                            </div>
                            </div>
                      </div>
                   </div>
                </div>
 


                </div>

            </footer>

    )
}

export default Footer
