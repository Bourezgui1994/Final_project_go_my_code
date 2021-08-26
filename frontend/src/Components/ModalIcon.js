import React ,{useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';

import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { signin, signout } from '../actions/userActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';


const ModalIcon = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    
    const submitHandler =(e) => {
     e.preventDefault();

     dispatch(signin(email, password));
    };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  

  const signoutHandler = () => {
   dispatch (signout());
  }

    return (
        <div>
         <div className="viewAdmin">
        {
          userInfo ? (
            
            <div className="dropdown">
            <Link to="#" className="nameAdmin dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{userInfo.name} </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <Link to="#signout" onClick={signoutHandler} className="linkAdmin"> Se déconnecter </Link>
              <Link to="profile" className="linkAdmin"> Profile utilisateur </Link>
              </ul>
            </div>


            ) :
          
          (
            <MdAccountCircle size='1.7rem'  data-bs-toggle="modal" data-bs-target="#exampleModal"/>

          )
        }


        {userInfo && userInfo.isAdmin && (
       
          <div className="dropdown" id="dropdownAdmin">
          <Link to="#admin" className="nameAdmin dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Admin </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link to="/discussion" className="linkAdmin"> Discussion </Link> <br/>
            <Link to="/productlist" className="linkAdmin"> Produits Terroir</Link> <br/>
            <Link to="/productlistArtisanal" className="linkAdmin"> Produits Artisanal</Link> <br/>

            <Link to="/userList" className="linkAdmin"> Utilisateurs</Link>
            </ul>
          </div>
        ) }
        </div>

        <div className="modal fade text-center" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
              <div className="container">
              <div className="logo text-center"> 
               <img src="/Image/logo.png" className="img-fluid" alt=" logo site" width="80"/>
              <h5> Se connecter/s'inscrire</h5> 
             </div>
           </div>
              </div>
              <div className="modal-body">

              <form className="formModal text-center" onSubmit={submitHandler}>


             {loading && <LoadingBox> </LoadingBox> }
             {error && <MessageBox variant="danger" className="errorSignin"> {error}</MessageBox>  }
              <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label text-center">Email address</label>
              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required  onChange={(e) => setEmail(e.target.value)}/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

                  
                <div className="mb-3 mt-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control " id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/ >
                <small id="passwordHelpBlock" class="form-text text-muted">
                 Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
                </div>
              

                  <button className="btn btn-outline-warning mt-5"> se connecter </button>

               </form>
         
               <Link to="/register">  <h6 className="mt-4"> Vous n'avez pas de compte ?</h6> </Link>
               <button className="btn btn-outline-warning"> s'inscrire </button>

              </div>
              
            </div>
          </div>
        </div>
              
        
        </div>
    )
}

export default ModalIcon;
