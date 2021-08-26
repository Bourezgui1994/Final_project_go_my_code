import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
    return (
        <div className="">
        <div className="row cardEvents">
        <div className="col-md-1"></div>
            <div className="col-md-3 mx-3">
            <div className="card " style={{ width:'20rem' , height:'28rem'}} >
                <img src="/Image/event1.jpg" class="card-img-top py-5 px-3" alt="..." height="200"/>
                <div className="card-body">
                <h5 className="card-title">Café Gourmand</h5>
                <p className="card-text">Bienvenue à notre événement dégustation produit-terroir</p>
                <p className="card-text"><small class="text-muted"> 12/12/2020 </small></p>
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle m-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className='fas fa-star'> </i>  Intéressé(e)
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <Link class="dropdown-item" href="#">Participé</Link>
                  <Link class="dropdown-item" href="#">Pas intéressé(e)</Link>
                </div>
                </div>
                
            </div>
            </div>

            <div class="col-md-3 mx-3">
            <div class="card" style={{ width:'20rem', height:'25rem'}}>
                <img src="/Image/event2.jpg" class="card-img-top py-5 px-3" alt="..." height="200"/>
                <div className="card-body">
                <h5 className="card-title">Foire El kram </h5>
                <p className="card-text">  Bienvenue à notre stand à foire el kram </p>
                <p className="card-text"><small class="text-muted"> 30/11/2020 </small></p>
                
                 
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle m-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className='fas fa-star'> </i>  Intéressé(e)
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <Link className="dropdown-item" href="#">Participé</Link>
                  <Link className="dropdown-item" href="#">Pas intéressé(e)</Link>
                </div>
            
            
                </div>
                
            </div>
            </div>

            <div className="col-md-3 mx-3">
            <div className="card" style={{ width:'20rem' , height:'28rem'}}>
                <img src="/Image/event3.jpg" class="card-img-top py-5 px-3" alt="..." height="200"/>
                <div className="card-body">
                <h5 className="card-title"> Atelier el mensej</h5>
                <p className="card-text"> Femme rurale et développment durable </p>
                <p className="card-text"><small class="text-muted"> 12/12/2020 </small></p>
                
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle m-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className='fas fa-star'> </i>  Intéressé(e)
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <Link class="dropdown-item" href="#">Participé</Link>
                  <Link class="dropdown-item" href="#">Pas intéressé(e)</Link>
                </div>
                </div>
                
            </div>
            </div>
            <div className="col-md-1"></div>
      </div>
    </div>
    )
}

export default Events
