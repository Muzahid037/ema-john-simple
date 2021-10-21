import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";
import './Login.css';

const Login = () => {
    const { user, error,setIsLoading, signInWithGoogle } = useAuth();
    const history = useHistory();

    const location = useLocation();
    const redirect_uri = location.state?.from || "/";
    console.log(location.state?.from);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                //const user = result.user;
                history.push(redirect_uri)
            })
            .finally(()=>setIsLoading(false));
    }

    return (
        <div className="login-container">
            <div className="">
                <h2>Sign-In {user.email && ("(Already Sign-in)")}</h2>
                <h5 style={{ color: "red" }}>{error}</h5>
                <form>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Amazon? <Link to="/register">Create Your Account</Link></p>
                <button onClick={handleGoogleSignIn}>Google Sign-In</button>

            </div>
        </div>
    );
};

export default Login;