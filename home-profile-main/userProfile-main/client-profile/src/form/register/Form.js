import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-datepicker/dist/react-datepicker.css";
import './form.css'
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';

import * as yup from 'yup'
import { Link,useNavigate } from 'react-router-dom';
 function Form(props) {
  const histroy=useNavigate()
  
  const formik=useFormik({
    
    initialValues:{
      fname:'',
      lname:'',
      email:'',
      pass:'',
      cpass:'',
      mobile:'',
      dob:'',
      gender:'',
      list:'',
      addrs:''
    },
    validationSchema:yup.object({
      fname:yup.string().required("Name is required").strict().trim(),
      lname:yup.string().required("Name is required"),
      email:yup.string().required("email is required").email(),
      pass:yup.string().required("Password is required").min(8,"passwrod should contain mininum of 8 characters"),
      cpass:yup.string().required("Confirm Password is required")
      .oneOf([yup.ref('pass'),null],"Confirm password same with password"),
      mobile: yup.string().required().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}),
      dob: yup.date().required(),
      gender: yup.string().oneOf(["male", "female"], "Required").required("Required").
      oneOf(["male" , "female"], 'Selecting the gender field is required'),
      list:yup.string() .required("select any one"),
      addrs:yup.string().required("Address is required")
    }),
   
    onSubmit:async(userInputData)=>{
       props.mydata (userInputData);
       setTimeout(() => {
         histroy("/login");
      }, 1000)
    }
  })
  return (
    <div className='container mt-4'>
    <div className='jumbotron container1'>
    <h1>User Registration</h1>
    <form className='user-reg-form' onSubmit={formik.handleSubmit} >
    <div className="form-group">
   <label htmlfor="fname">First Name</label>
   <input type="text" className="form-control" name="fname" id="fname"  
   placeholder="Enter first Name" onChange={formik.handleChange} value={formik.values.fname}/>
   {formik.errors.fname?<small id="error"  className="error text-danger">{formik.errors.fname}</small>:null}
 </div>
 <br/>
 <div className="form-group">
 <label htmlfor="lname">Last Name</label>
 <input type="text" className="form-control" name="lname" id="lname"  
 placeholder="Enter first Name" onChange={formik.handleChange} value={formik.values.lname}/>
 {formik.errors.lname?<small id="error"  className="error text-danger">{formik.errors.lname}</small>:null}
</div>
<br/>
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
  </div><br/>
  <div className="form-group">
    <label htmlfor="cpass">Confirm password</label>
    <input type="password" className="form-control" id="cpass" 
    name='cpass'  placeholder="Enter confirm Password" onChange={formik.handleChange} value={formik.values.cpass}/>
    {formik.errors.cpass?<small id="error" className="error text-danger">{formik.errors.cpass}</small>:null}
  </div><br/>
  <div className="form-group">
    <label htmlfor="mobile">Enter mobile number</label>
    <input type="tel"className="form-control" id="mobile" 
    name='mobile' placeholder="Enter mobile number" onChange={formik.handleChange}/>
    {formik.errors.mobile?<small id="error" className="error text-danger">{formik.errors.mobile}</small>:null}
  </div><br/>
  <div>
  <label htmlfor="dob">Date of birth:</label>
  <input className="dob" name="dob" type="date" onChange={formik.handleChange}/><br/>
  {formik.errors.dob?<small className='text-danger'>{formik.errors.dob}</small>:null}
  </div><br/>
  <span>Gender</span>
<div className="form-check">
<label className="form-check-label" htmlfor="flexRadioDefault1" >Male</label>
  <input className="form-check-input" type="radio" name="gender" id="gender1"
  onChange={formik.handleChange} value="male"/>
</div>
<div className="form-check">
<label className="form-check-label" htmlfor="flexRadioDefault2">Female</label>
  <input className="form-check-input" type="radio" onChange={formik.handleChange} 
value="female" name="gender" id="gender2" />
</div>
{formik.errors.gender?<small id="error" className="error text-danger">
{formik.errors.gender}</small>:null}  
<br/><br/>
<div class="form-group">
  <label htmlfor="sel1">Select list:</label>
  <select className="form-control" id="sel1" name='list'
  onChange={formik.handleChange} value={formik.values.list}>
    <option value="">Select any one</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="ug">Ug</option>
    <option value="pg">Pg</option>
  </select>
  {formik.errors.list?<small className='text-danger'>{formik.errors.list}</small>:null}
</div>
<br/>
<div><br/>
<textarea class="form-control " placeholder='enter Address' onChange={formik.handleChange} 
value={formik.values.addrs} name="addrs"></textarea>
{formik.errors.addrs?<small id="error" className="error text-danger">
{formik.errors.addrs}</small>:null}
</div><br/>
<button class="btn btn-primary" >Submit</button>
    </form><br/>
    <p className="option">Already have a account <Link to="login">Login</Link></p>
        </div>
    </div>
  )
}
export default Form