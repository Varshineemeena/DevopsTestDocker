import  { Component } from 'react'
import axios from 'axios';
 
const ViewAll = "http://localhost:8080/GetAllBus";
const  Add = "http://localhost:8080/CreateBus";
const Delete= "http://localhost:8080/DeleteBus/";
const View=  "http://localhost:8080/GetBus/";
const Update= "http://localhost:8080/UpdateBus";
const viewAllDept="http://localhost:8080/GetAllDepartment";
const IdDepartment="http://localhost:8080/GetDepartmentId";
 
const AutoId="http://localhost:8080/AutoPop";
class AllService extends Component {
 
     BusGetAll = () =>{
        return axios.get(ViewAll);
            };
 
   
 
            AddingEmpList = (Bus)=>{
                return axios.post(Add,Bus);
            };
 
            DeleteEmpList =(id)=>{
                return axios.delete(Delete+id);
            }
 
            //id populate
            // ListId=()=>{
            //     return axios.get(IDdelete);
            // }
 
 
            UpdateEmpList=(Bus)=>{
                console.log(Bus);
                return axios.put(Update,Bus);
            }
            ViewBus=(id)=>{
                return axios.get(View+id);
            }
           
 
 
            DepartmentList=()=>{
                return axios.get(viewAllDept)
             }
            
 
           
            //id populate
            ListDeptId=()=>{
                return axios.get(IdDepartment);
            }
 
            
 
 
            FindAllId=()=>{
                return axios.get(AutoId);
            }
 
    }
 
    const serviceInstance = new AllService();

    export default serviceInstance;