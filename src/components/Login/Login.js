import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signInUser = { displayName, email, photoURL };
            setLoggedInUser(signInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error);
        });
    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //         })
    //         .catch(function (error) {
    //             // Handle error
    //         });
    // }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <Link to='/'>
                <img src={logo} style={{ height: 47 }} alt="creative-agency-logo" />
            </Link>
            <div className="login-field m-5">
                <h2 className="text-center">Login With</h2>
                <div className='google-btn-container'>
                    <img src={googleIcon} alt="google-icon" />
                    <button onClick={handleGoogleSignIn} className='login-btn'>Continue with Google</button>
                </div>
                <p>Don't have an Account? <a href="#signup">Create an Account</a></p>
            </div>
        </div>
    );
};

export default Login;