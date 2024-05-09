import  { Component } from 'react'
import axios from 'axios';
 
const ViewAll = "http://localhost:8080/GetAllUser";
const  Add = "http://localhost:8080/CreateUser";
const Delete= "http://localhost:8080/DeleteUser/";
const View=  "http://localhost:8080/GetUser/";
const Update= "http://localhost:8080/UpdateUser";
const viewAllDept="http://localhost:8080/GetAllDepartment";
const IdDepartment="http://localhost:8080/GetDepartmentId";
 
const AutoId="http://localhost:8080/AutoPop";
class AllService extends Component {
 
     UserGetAll = () =>{
        return axios.get(ViewAll);
            };
 
   
 
            AddingEmpList = (User)=>{
                return axios.post(Add,User);
            };
 
            DeleteEmpList =(id)=>{
                return axios.delete(Delete+id);
            }
 
            //id populate
            // ListId=()=>{
            //     return axios.get(IDdelete);
            // }
 
 
            UpdateEmpList=(User)=>{
                console.log(User);
                return axios.put(Update,User);
            }
            ViewUser=(id)=>{
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
    const allServiceInstance = new AllService();

    export default allServiceInstance;