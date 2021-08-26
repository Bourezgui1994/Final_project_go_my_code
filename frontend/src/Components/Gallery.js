import React, { useEffect } from 'react'
import TagButton from './TagButton'

import { SRLWrapper } from 'simple-react-lightbox'

const options ={
    settings : {
        overlayColor:'yellow'
    },
    buttons:{
        backgroundColor:'yellow',
        iconColor:'white'
    }
}

const Gallery = ({gallerieImage,setFilterImage,tag,filterImage,setTag}) => {
    
  useEffect ( () => {
        tag === 'all' ? setFilterImage(gallerieImage) :  setFilterImage(gallerieImage.filter(el =>el.tag===tag))
      
    },[tag])

    return (
        <div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">

         <TagButton name="all" handleSetTag={setTag}/>
         <TagButton name="Produit Terroir" handleSetTag={setTag} />
         <TagButton name="Produit Artisanale" handleSetTag={setTag}/>
         <TagButton name="Accessoire" handleSetTag={setTag}/>
         </div>
        
         <SRLWrapper options={options}>

        <div className="containerImage"> 
        {filterImage.map((gallerieImage,key) =>(

            <a href={gallerieImage.image}>
            <img src={gallerieImage.image} alt="" className="imageGallerie"/>
            </a>
         
        ))}
        </div>
        </SRLWrapper>


        </div>
    )
}

export default Gallery;


