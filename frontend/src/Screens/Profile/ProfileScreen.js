import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import IconSeperator from '../../Components/IconSeperator';
import LoadingBox from '../../Components/LoadingBox';
import MessageBox from '../../Components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    
    const {success: successUpdate,error: errorUpdate,loading: loadingUpdate,} = userUpdateProfile;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));        
        } else{
            setName(user.name);
            setEmail(user.email);
        }
      }, [dispatch, userInfo._id, user]);


    const submitHandler = (e) =>{
        e.preventDefault();
        //dispatch update profile

        if (password !== confirmPassword) {
            alert('veuillez vérifier votre Mot de passe ');
          } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }));
          }
    };


    return (
        <div>
           
        <div class="col-md-12  col-xs-12 text-center">  
            <h1> Profile <span> Utilisateur </span></h1>
            <IconSeperator/>
            </div>

        <div className="row">
        <div className="col-md-4"></div>
        
        
        <form onSubmit={submitHandler} className="formSignin col-md-6 mt-5" >
          

         {
            loading ? (  <LoadingBox> </LoadingBox> )
            :
            error ?  (<MessageBox variant="danger" className="errorSignin"> {error}</MessageBox> )
            :
            ( 
            <> 
            
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && ( <MessageBox variant="danger">{errorUpdate}</MessageBox> )}
            {successUpdate && ( <MessageBox variant="success"> Votre profil a été modifié </MessageBox>)}

            
            <div className="mb-3">
            <label for="name" className="form-label text-center"> Nom complet</label>
            <input type="text" className="form-control " id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-center">Addresse Email</label>
            <input type="email" className="form-control " id="exampleInputEmail1"  aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label"> Mot de passe</label>
            <input type="password" className="form-control " id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} / >
            </div>
            
            <div className="mb-3">
            <label for="confirmPassword" className="form-label">Confirmer Votre Mot de passe</label>
            <input type="password" className="form-control " id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} / >
            </div>

           
            <button type="submit" className="btn btn-warning mt-4" > Modifier</button>
            </>
            )}
            
        </form>
        <div className="col-md-2"></div>
    </div>






        </div>
    )
}

export default ProfileScreen;
