import React from 'react'

const FilterProduct = () => {
    return (
        <div className="filterProduct">
         <h4 className='text-center'>Liste produits</h4>
         
                <ul className="list-group mx-5 w-70 mt-5 ">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    All
                        <span className="badge bg-warning rounded-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    Bssisa
                        <span className="badge bg-warning rounded-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    Epice
                        <span className="badge bg-warning rounded-pill">1</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    Harissa 
                        <span className="badge bg-warning rounded-pill">1</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    Huile Essentiel
                        <span className="badge bg-warning rounded-pill">1</span>
                    </li>
            </ul>

        </div>
    )
}

export default FilterProduct


