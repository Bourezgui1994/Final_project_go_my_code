import React ,{useState}from 'react';
import {Col } from 'react-bootstrap';


// import carousel data 
import {CarouselData} from '../../Data/CarouselData';

//import gallerie image data 
import {GalleryImage} from '../../Data/GalleryImage';


// import header component
import Header from '../../Components/Header';
// import Icon seperator component
import IconSeperator from '../../Components/IconSeperator';

// import category component
import CategoryProduct from '../../Components/CategoryProduct';

//import Spacifity product component
import SpecifityProduct from '../../Components/SpecifityProduct';

// import gallerie image component
import Gallery from '../../Components/Gallery';

import NewProduct from '../../Components/NewProduct';
import Events from '../../Components/Events';




const HomeScreen = () => {
  // set carousel data 
  // set gallerie data
   const [tag,setTag] = useState('all');
   const [filterImage,setFilterImage] =useState([])

    return (
        <div>
           <Header carousel={CarouselData}/>
           <Col md={12} xs={12} >
           <h1>Gategorie <span>Produit</span></h1>
           <IconSeperator/>
           </Col>
           <CategoryProduct/>
           <SpecifityProduct/>
           <h1> Nouveaux <span> Produits </span></h1>
           <IconSeperator/>
           <NewProduct/>

           <Gallery gallerieImage={GalleryImage} setFilterImage={setFilterImage} tag={tag} filterImage={filterImage} setTag={setTag}/>
           <h1> Nos Evéne<span>ments</span></h1>
           <IconSeperator/>

           <Events/>


        </div>
    )
}

export default HomeScreen;
