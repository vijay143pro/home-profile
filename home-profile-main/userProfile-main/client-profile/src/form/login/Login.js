import React from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import './login.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Login(props) {
  const histroy=useNavigate()
  const formik=useFormik({
    initialValues:{
      email:'',
      pass:''
    },
    validationSchema:yup.object({
          email:yup.string().required("email is required").email(),
          pass:yup.string().required("Password is required").min(8,"passwrod should contain mininum of 8 characters"),
  
    }),
    onSubmit:(userData)=>{
      
        axios.post("http://localhost:4000/info/login",userData).then((res)=>{
          if(res){
            histroy("/home/"+res.data.userId)
          }
        }).catch((err)=>{
          var obj=err.response.data
        var txt=JSON.stringify(obj)
        alert(txt);
          
        })
        
    }
  })
  return (
    <div className="container container2 jumbotron">
      <form className="login" method="post"
      onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
        <label htmlfor="email">Email</label>
        <input type="email" className="form-control" 
        name='email' id="email"  placeholder="Enter Email" onChange={formik.handleChange}
        value={formik.values.email}/>
        {formik.errors.email?<small id="error" className="error text-danger">{formik.errors.email}</small>:null}
      </div>
      <br/>
      <div className="form-group">
          <label htmlfor="pass">Password</label>
          <input type="password" className="form-control" 
          name='pass' id="pass"  placeholder="Enter password" onChange={formik.handleChange} value={formik.values.pass}/>
          {formik.errors.pass?<small id="error" className="error text-danger">{formik.errors.pass}</small>:null}
        </div>
<br/>
  <button class="btn btn-primary" >Submit</button>
      </form><br/>
      <p>Create a account <Link to="/">Register</Link></p>
    </div>
  )
}

export default Login


