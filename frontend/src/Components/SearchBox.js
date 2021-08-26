import React, { useState } from 'react';

const SearchBox = (props) => {
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search/name/${name}`);
      };

    return (
         <div className="searchBox">
          
         <h4 className='text-center '>Liste produits</h4>
         
         <form class="form-inline search mt-5" onSubmit={submitHandler}>
              <input type="text" placeholder="Rechercher.." name="q" id="q" onChange={(e) => setName(e.target.value)} />
              <button type="submit"><i class="fa fa-search"></i></button>
        </form>

         </div>
        
    )
}

export default SearchBox;
