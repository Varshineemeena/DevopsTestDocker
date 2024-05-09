import  { Component } from 'react'
import axios from 'axios';
 
const ViewAll = "http://localhost:8080/GetAllBooking";
const  Add = "http://localhost:8080/CreateBooking";
const Delete= "http://localhost:8080/DeleteBooking/";
const View=  "http://localhost:8080/GetBooking/";
const Update= "http://localhost:8080/UpdateBooking";
const viewAllDept="http://localhost:8080/GetAllDepartment";
const IdBus="http://localhost:8080/GetBusId";
const IdUser="http://localhost:8080/GetUserId";
 
const AutoId="http://localhost:8080/AutoPop";
class BookingService extends Component {
 
     BookingGetAll = () =>{
        return axios.get(ViewAll);
            };
 
   
 
            AddingEmpList = (Booking)=>{
                return axios.post(Add,Booking);
            };
 
            DeleteEmpList =(id)=>{
                return axios.delete(Delete+id);
            }
 
            //id populate
            // ListId=()=>{
            //     return axios.get(IDdelete);
            // }
 
 
            UpdateEmpList=(Booking)=>{
                console.log(Booking);
                return axios.put(Update,Booking);
            }
            ViewBooking=(id)=>{
                return axios.get(View+id);
            }
           
 
 
            DepartmentList=()=>{
                return axios.get(viewAllDept)
             }
            
 
           
            //id populate
            ListBusId=()=>{
                return axios.get(IdBus);
            }

            ListUsertId=()=>{
                return axios.get(IdUser);
            }
 
            
 
 
            FindAllId=()=>{
                return axios.get(AutoId);
            }
 
    }
    const bookingServiceInstance = new BookingService();

    export default bookingServiceInstance;