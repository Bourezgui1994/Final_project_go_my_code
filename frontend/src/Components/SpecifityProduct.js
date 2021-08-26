import React from 'react'
import { GiLaurelCrown, GiReceiveMoney ,GiStorkDelivery } from "react-icons/gi";
import { BsGem } from "react-icons/bs";



const SpecifityProduct = () => {
    return (
        <div className="SpecifityProduct">
       
        <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="col-md-3 col-sm-12 mt-5">
          <GiLaurelCrown size="3.5rem" className="iconSpecifityProduct mb-4 "/>
            <p > On se rend bien compte de la qualité de nos produits et la satifaction du client </p>
          </div>
          <div className="col-md-3 col-sm-12 py-3  mt-5">
           <BsGem size="2.7rem" className="iconSpecifityProduct mb-4 "/>
            <p > Produits fait à la main <br />
                 avec des pièces unique  </p>
          </div>
          <div className="col-md-3 col-sm-12  mt-5"> 
           <GiReceiveMoney size="3.5rem" className="iconSpecifityProduct mb-4 "/>
            <p > On offre des produits <br/>avec prix raisonnable </p>
          </div>
          <div className="col-md-3 col-sm-12  mt-5" >
           <GiStorkDelivery size="2.8rem" className="iconSpecifityProduct mb-4 mt-2"/>
            <p > Livraison à domicile pour <br/> toutes vos commandes </p>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default SpecifityProduct
