import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }

  }
  
  const handleSignInWithGoogle = async() => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result)
      localStorage.setItem('token', result.user.accessToken)
      localStorage.setItem('user', JSON.stringify(result.user))
      navigate("/")
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleSignInWithGoogle} className="login-button">Login with Google</button>
      <p>
        Need to Signup? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
