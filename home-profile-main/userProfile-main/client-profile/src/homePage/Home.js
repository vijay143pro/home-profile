import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './home.css'
import profile from '../asserts/user-img.png'
function Home() {
  const [data,setData]=useState({})
  let {id}=useParams()
  axios.get("http://localhost:4000/info/userId/"+id).then((res)=>{
    console.log(res);
    setData(res.data[0])
  })
   
  return (
    <div>
     <div className='container'>
     <h1>UserDetails</h1>
     <h3 className='greet'>Welcome {data.fname} {data.lname} !</h3>
     <img src={profile} alt='img' width="200px" height="200px" className='prof-img'/>
     <div className='row content-1'>
     <h2 className='col-md-5 fname'>{data.fname}</h2>
     <h2 className='col-md-7 lname'>{data.lname}</h2>
     </div>
     <div className='row content-2'>
     <h5 className='col-md-5 phone'>Phone</h5>
     <h5 className='col-md-7 phone-value'>{data.mobile}</h5>
     </div>
     <div className='row content-3'>
     <h5 className='col-md-5 dob'>Date of birth</h5>
     <h5 className='col-md-7 dob-value'>{data.dob}(yyyy-dd-mm)</h5>
     </div>
     <div className='row content-4'>
     <h5 className='col-md-5 gender'>Gender</h5>
     <h5 className='col-md-7 gender-value'>{data.gender}</h5>
     </div>
     <div className='row content-4'>
     <h5 className='col-md-5 qualific'>Qualification</h5>
     <h5 className='col-md-7 qualific-value'>{data.list}</h5>
     </div>
     <div className='row content-5'>
     <h5 className='col-md-5 address'>Address</h5>
     <h5 className='col-md-7 adres'>{data.addrs}</h5>
     </div>
     </div>
    </div>
  )
}

export default Home