
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import UserService from '../service/UserService';

 
const AddUser = () => {
 
    let navigate=useNavigate();
    const[user, setUser] = useState({
             
              name:"",
              city:"",
              phone:"",
              email:""
    })
 
   
const{name,city,phone,email}=user;
 
const handleInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});
};
 
 
const saveUser=async(e)=>{
    e.preventDefault();
    await UserService.AddingEmpList(user).then((response)=>{
      setUser(response.data)
      alert("success")
      navigate("/view-user");
    })
  }
 
 
 
 
 
  return (
 
   
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add User Details</h2>
      <form onSubmit={(e) => saveUser(e)}>
         
 
        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="name">Name:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="name"
             id="name"
             required
             value={name}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>
 
        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="city">City:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="city"
             id="city"
             required
             value={city}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="phone">Phone:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="phone"
             id="phone"
             required
             value={phone}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="email">E-Mail:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="email"
             id="email"
             required
             value={email}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>
 
        <div className="row mb-5">
        <div className="col-sm-2">
            <button
            type="submit"
            name='save'
            className="btn btn-outline-success btn-lg"
            >Add</button>
        </div>
 
        <div className="col-sm-2">
          <div data-testid="cancelbtn">
            <Link to="/view-department"
            type="submit"
            className="btn btn-outline-warning btn-lg">Cancel</Link>
            </div>
        </div>
        </div>
 
 
       
 
 
 
      </form>
    </div>
  )
}
 
export default AddUser