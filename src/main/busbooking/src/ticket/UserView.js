import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import Search from '../common/Search';
import UserService from '../service/UserService';


 
 
 
const UserView = () => {
   const[User,setUser]=useState([]);
   const[search,setSearch]=useState("");
 
    useEffect(() =>{
        loadUser();
    },[])
 
   const loadUser=async()=>{
    await UserService.UserGetAll().then((response)=>{
      setUser(response.data)
    })
  }
 
 
 
  

 
   
 
 
  return (
    <section>
      <Search search={search}
      setSearch={setSearch}
      />
      <table className="table table-striped  table-hover shadow">
        <thead>        
       <div data-testid="adduserbtn">
        <Link
                                className="btn btn-primary mx-2"
                                to={"/add-user"}>
                                Add User Details
                            </Link>
                            </div>
            <tr className="text-center">
 
             <th>User Id</th>
             <th>User name</th>
             <th>User City</th>
             <th>User Phone</th>
             <th>User Email</th>
             
 
            </tr>
        </thead>
        <tbody className="text-center">
           
            {User
            .map((Users)=>(
            <tr key={Users.id}>
               
                   <td>{Users.id}</td>
               
             
              <td>{Users.name}</td>
              <td>{Users.city}</td>
              <td>{Users.phone}</td>
              <td>{Users.email}</td>
             
             
              
           </tr>
            ))}
           
 
 
        </tbody>
       
        </table>
    </section>
  )
            }
 
export default UserView