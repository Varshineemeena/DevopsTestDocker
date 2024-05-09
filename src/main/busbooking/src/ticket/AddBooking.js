
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BookingService from '../service/BookingService';

 
const AddBooking = () => {
 
    let navigate=useNavigate();
    const[Booking, setBooking] = useState({
        departure:"",
        destination:"",
        bus:{
            id:0,
        },
        user:{
          id:0
        }
    })
 
 
   
// const{sname,scity,sphoneno,did}=Booking;
 
const handleInputChange = (e) => {
  if (e.target.name === "busid") {
    setBooking({...Booking, bus: { id: e.target.value } });
  } else if (e.target.name === "userid") {
    setBooking({...Booking, user: { id: e.target.value } });
  } else setBooking({...Booking, [e.target.name]: e.target.value });
};
const saveBooking=async()=>{
    // e.preventDefault();
    await BookingService.AddingEmpList(Booking).then((response)=>{
      setBooking(response.data)
      alert("success")
      navigate("/view-booking");
    })
  }
const [setAll]=useState([]);
 
const loadDetails=async(e)=>{
  await BookingService.ListBusId().then((res)=>setAll(res.data)).catch((err) =>console.log(err));
}
 
useEffect(()=>{
  loadDetails();
})
 
const[setIdList]=React.useState([]);
useEffect(()=>{
  BookingService.ListBusId().then((response)=>{
    console.log(response.data);
    setIdList(response.data);
  });
},);

const loadDetailsuser=async(e)=>{
  await BookingService.ListUsertId().then((res)=>setAll(res.data)).catch((err) =>console.log(err));
}
 
useEffect(()=>{
  loadDetailsuser();
},)
 
const[idLists,setIdLists]=React.useState([]);
useEffect(()=>{
  BookingService.ListUsertId().then((response)=>{
    console.log(response.data);
    setIdLists(response.data);
  });
},[]);
 
 
  return (
 
   
    <div className="col-5 py-2 px-5 offset-3 shadow">
      <h2 className="mt-5 offset-3"> Add Booking</h2>
      <form onSubmit={(e) => saveBooking(e.booking)}>
         
        <div className="input-group mb-5" >
            <label
            className="input-group-text" htmlFor="sname">Departure:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="departure"
             id="departure"
             required
             value={Booking.departure}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>
 
        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="scity">Destination:</label>
            <input
            className="form-control col-sm-6"
             type="text"
             name="destination"
             id="destination"
             required
             value={Booking.destination}
             onChange={(e)=>handleInputChange(e)}
            />
        </div>
 
        <div className="input-group mb-5">
  <label
    className="input-group-text" htmlFor="did">User ID:</label>
  <select
    className="form-control col-sm-6"
    type="id"
    name="userid"
    id="id"
    required
    value={Booking.id}
    onChange={(e)=>handleInputChange(e)}>
    {
      idLists.map((id)=>
      <option key={id}>{id}
      </option>
      )
    }
  </select>
</div>
        <div className="input-group mb-5">
            <label
            className="input-group-text" htmlFor="did">User ID:</label>
            <select
            className="form-control col-sm-6"
             type="id"
             name="userid"
             id="id"
             required
             value={Booking.id}
             onChange={(e)=>handleInputChange(e)}>
              {
                idLists.map((id)=>
                <option key={id}>{id}
                </option>
                )
              }
             </select>
           
        </div>

        
 
        <div className="row mb-5">
        <div className="col-sm-2" data-testid="addbtn">
            <button
            name='save'
            type="submit"
            className="btn btn-outline-success btn-lg">Add</button>
        </div>
 
        <div className="col-sm-2" >
          <div data-testid="cancelbtn">

          
            <Link to="/view-employees"
            type="submit"
            className="btn btn-outline-warning btn-lg">Cancel</Link>
            </div>
        </div>
        </div>
 
 
       
 
 
 
      </form>
    </div>
  )
}
 
export default AddBooking