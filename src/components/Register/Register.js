import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";

const Register = () => {
    const history=useHistory();
    const location = useLocation();

    const {error,signInWithGoogle} = useAuth();

    const redirect_uri = location.state?.from || "/";
    console.log(location.state?.from);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                //const user = result.user;
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-container">
            <div className="">
                <h2>Create account</h2>
                <h5 style={{color:"red"}}>{error}</h5>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="Password"/>
                    <br />
                    <input type="password" name="password" id="" placeholder="Re-enter Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?<Link to="/login"> Sign-In </Link></p>
                <button onClick={handleGoogleSignIn}>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Register;