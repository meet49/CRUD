import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'; 



function Create() {
  const [values, setValues] = useState({
    name: '',
    email:'',
    phoneno:''
  
  })

  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:4000/Student', values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add Student Data</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e => setValues({...values,name: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email Adress' 
              onChange={e => setValues({...values,email: e.target.value})}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="phoneno">Phone No:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone No'
            onChange={e => setValues({...values,phoneno: e.target.value})} />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
