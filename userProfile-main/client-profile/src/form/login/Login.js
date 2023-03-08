import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login() {
  return (
    <div className="container container2 jumbotron">
      <form className="login" method="post">
        <h1>Login</h1>
      <div className="form-group">
  <label htmlfor="email">Email</label>
  <input type="email" className="form-control" 
  name='email' id="email"  placeholder="Enter Email" />
</div>
<br/>
<div className="form-group">
    <label htmlfor="pass">Password</label>
    <input type="password" className="form-control" 
    name='pass' id="pass"  placeholder="Enter password" />
  </div><br/>
  <button class="btn btn-primary" >Submit</button>
      </form><br/>
      <p>Create a account <Link to="/">Register</Link></p>
    </div>
  )
}

export default Login
