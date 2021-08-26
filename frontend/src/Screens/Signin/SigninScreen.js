import React ,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';


import './Signin.css';
import { signin } from '../../actions/userActions';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import IconSeperator from '../../Components/IconSeperator';



const SigninScreen = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const redirect = props.location.search? props.location.search.split('=')[1]:'/shipping';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    
    const dispatch = useDispatch();

// implement submit Handler 
    const submitHandler =(e) => {
     e.preventDefault();

     dispatch(signin(email, password));
    };

 // dispatch an action to fetch a user info  from store 


    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div className="signin"> 

        <div class="col-md-12  col-xs-12 text-center">  
            <h1> Se conn<span>ecter</span></h1>
            <IconSeperator/>
            </div>
        <div className="row">
            <div className="col-md-4"></div>
            
            
            <form onSubmit={submitHandler} className="formSignin col-md-6 mt-5" >

             {loading && <LoadingBox> </LoadingBox> }
             {error && <MessageBox variant="danger" className="errorSignin"> {error}</MessageBox>  }
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-center">Addresse Email</label>
                <input type="email" className="form-control " id="exampleInputEmail1"  aria-describedby="emailHelp" required  onChange={(e) => setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"> Mot de passe </label>
                <input type="password" className="form-control " id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}/ >
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-warning mt-4" >Se connecter</button>
           
                <div>  Vous n'avez pas de compte ? {' '}
                      
                <Link to='/register'>Créer votre compte </Link>
                
                </div>
            </form>
            <div className="col-md-2"></div>
        </div>
        </div>
    )
}

export default SigninScreen
