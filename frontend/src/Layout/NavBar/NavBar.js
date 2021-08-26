import React from 'react'
import {useSelector} from 'react-redux';
import './NavBar.css'

// import comonent boostrap
import { Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';

// import icons from react-icon
import {IconContext} from "react-icons";
import { FaSearch , FaShoppingBasket} from "react-icons/fa";
import ModalIcon from '../../Components/ModalIcon';



const NavBar = () => {

  const cart =useSelector (state => state.cart);
  const {cartItems}= cart;
  
  


    return (
     
        <div>
           
        <Navbar bg="white" expand="lg" className="navigation" >
        <Container>
          <Navbar.Brand href="#home" as={Link} to={'/'} > <img src="/Image/logo.png" alt="logo site web artisan femme " width="110" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={'/'} className="navLink">Accueil</Nav.Link>
              
              <NavDropdown  title="Boutique" id="basic-nav-dropdown" className="mainDropdown" > 
                <NavDropdown.Item as={Link} to={'/LocalProductScreen'} className="dropdownItem">Produits terroirs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/ArtisanalProductScreen'} className="dropdownItem" >Produits Artisanaux</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/AccessoryProductScreen'} className="dropdownItem"> Accessoires</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={'/cart'} className="navLink"> Panier</Nav.Link>
              <Nav.Link as={Link} to={'/Contact'}  className="navLink"> Contact</Nav.Link>
            </Nav>
          
        
         <IconContext.Provider value={{ className: "myReact-icons"}} > 
          <FaSearch size='1.4rem' />
       
       
          <Link to='/cart'> <FaShoppingBasket size='1.7rem'/>
           {
             cartItems.length > 0 && (
              <span className="numberItems"> {cartItems.length}</span>
             )}
          </Link> 
       
          <ModalIcon/>
          </IconContext.Provider>
          </Navbar.Collapse>
          </Container>

      </Navbar>
                
        </div>
      
    )
}

export default NavBar
