import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Create() {
    const [values,setValues]=useState({
        id:'',
        name:'',
        email:'',
        phone:'',
    })
    const navigate= useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',values)
        .then(res=>{
            console.log(res)
            navigate('/')
        }
            
        )
        .catch(err=>console.log(err))
    }
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
     <h1>Add a User</h1>
     <form onSubmit={handleSubmit}>
     <div className='mb-2'>
         <label htmlFor="name">Id:</label>
         <input onChange={e => setValues({...values,id: e.target.value})} type="text" name='id'
         className='form-control' placeholder='Enter your Id' />
       </div>
       <div className='mb-2'>
         <label htmlFor="name">Name:</label>
         <input onChange={e => setValues({...values,name: e.target.value})} type="text" name='name'
         className='form-control' placeholder='Enter your name' />
       </div>

       <div className='mb-2'>
         <label htmlFor="email">Email:</label>
         <input onChange={e => setValues({...values,email: e.target.value})} type="email" name='email'
         className='form-control' placeholder='Enter your email' />
       </div>


       <div className='mb-2'>
         <label htmlFor="phone">Phone:</label>
         <input onChange={e => setValues({...values,phone: e.target.value})} type="text" name='phone'
         className='form-control' placeholder='Enter your phone number' />
       </div>
       <button onClick={handleSubmit} className='btn btn-success'>Submit</button>

       <Link to="/" className='btn btn-primary ms-3'>Back</Link>


     </form>
   </div>
  </div>
  )
}

export default Create
