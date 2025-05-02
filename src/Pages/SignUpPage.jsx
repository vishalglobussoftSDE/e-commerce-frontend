import React from 'react'
import Header from "../components/Header";
import signupImg from "../assets/logSign-Img/log-sign.png"
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div>
      <Header/>
      <div>
        <img src={signupImg} alt="" />
        <div>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form>
            <input type="text" name="name" placeholder='Name'/>
            <input type="text" name="email" placeholder='Enter your email'/>
            <input type="text" name='password' placeholder='Password'/>
            <div>
              <button>Create Account</button>
              <Link>Sign up with Google</Link>
            </div>
            <div>
              <Link>Already have an account?</Link>
              <Link>Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage