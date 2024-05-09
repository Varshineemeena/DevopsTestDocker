
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BusService from '../service/BusService';



 
const AddBus = () => {
 
    let navigate=useNavigate();
    const[bus, setBus] = useState({
             
              name:"",
              busType:"",
              seatType:""
              
    })
 
   
const{name,busType,seatType}=bus;
 
const handleInputChange=(e)=>{
    setBus({...bus,[e.target.name]: e.target.value});
};
 
 
const saveBus=async(e)=>{
    e.preventDefault();
    await BusService.AddingEmpList(bus).then((response)=>{
      setBus(response.data)
      alert("success")
      navigate("/view-bus");
    })
  }
 
 
 
 
 
  return (
 
   
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add Bus Details</h2>
      <form onSubmit={(e) => saveBus(e)}>
         
 
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
            className="input-group-text" htmlFor="busType">Bus Type:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="busType"
             id="busType"
             required
             value={busType}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="seatType">Seat type:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="seatType"
             id="seatType"
             required
             value={seatType}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>

        
 
        <div className="row mb-5">
        <div className="col-sm-2">
            <button
            type="submit"
            name='save'
            className="btn btn-outline-success btn-lg">Add</button>
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
 
export default AddBus