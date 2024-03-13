import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Divider } from '@mui/material';
import axios from 'axios';

const Read = () => {
  const[data,setData]= useState([])

  const {id} = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8080/api/user/`+id)
    .then(res => {
      setData(res.data[0])
      console.log(res)})
      .catch(err => console.log(err));
  },[id]);



  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=600')", 
    backgroundSize: 'cover'}}>
       <div className='d-flex justify-content-center bg-white' >
      <div className='w-full rounded p-3'>
      
        <div className='p-2'>
        
          <h2>Employee Details</h2>
          <Divider />
          <h4>ID: {data.id}</h4>
          <h4>Full Name: {data.full_name} </h4>
          <h4>Email: {data.email}</h4>
          <h4>Designation: {data.designation}</h4>
        </div>
        
        
        <Link to='/' className='btn btn-primary btn-sm ' >Back</Link>
        <Link to={`/edit/${data.id}`} className='btn btn-sm btn-info m-2'>Edit</Link>
        </div>
        </div>
    </div>
  )
}

export default Read
