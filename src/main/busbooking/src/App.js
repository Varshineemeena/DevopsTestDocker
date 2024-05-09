import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./common/NavBar";
import BookingView from "./ticket/BookingView";
import AddBooking from "./ticket/AddBooking";
import UserView from "./ticket/UserView";
import BusView from "./ticket/BusView";
import AddUser from "./ticket/AddUser";
import AddBus from "./ticket/AddBus";
import FindBooking from "./ticket/FindBooking";




function App() {
  return (
    <main className="">
      <Router>
      <NavBar/>
        <Routes>
          {/* <Route
          exact 
          path="/" 
          element={<Home/>}></Route> */}
          <Route
          exact 
          path="/view-bookings" 
          element={<BookingView/>}></Route>

        <Route
          exact 
          path="/view-users" 
          element={<UserView/>}></Route>

        <Route
          exact 
          path="/view-buses" 
          element={<BusView/>}></Route>

          <Route
          exact 
          path="/add-booking" 
          element={<AddBooking/>}></Route>

          <Route
          exact 
          path="/add-user" 
          element={<AddUser/>}></Route>

        <Route
          exact 
          path="/add-bus" 
          element={<AddBus/>}></Route>
          
          <Route 
          exact 
          path="/booking-profile/:id" 
          element={<FindBooking/>}></Route>

          {/* <Route 
          exact 
          path="/edit-employee/:id" 
          element={<EditEmployee/>}></Route> */}
          
        
          {/* <Route
          exact 
          path="/view-departments" 
          element={<DepartmentView/>}></Route> */}

          {/* <Route 
          exact 
          path="/add-department" 
          element={<AddDepartment/>}></Route> */}

          {/* <Route 
          exact 
          path="/department-profile/:id" 
          element={<FindDepartment/>}></Route> */}

          {/* <Route 
          exact 
          path="/edit-department/:id" 
          element={<EditDepartment/>}></Route> */}

          {/* <Route
          exact 
          path="/view-projects" 
          element={<ProjectView/>}></Route> */}

          {/* <Route 
          exact 
          path="/add-project" 
          element={<AddProject/>}></Route> */}

          {/* <Route 
          exact 
          path="/edit-project/:id" 
          element={<EditProject/>}></Route> */}

          {/* <Route 
          exact 
          path="/project-profile/:id" 
          element={<FindProject/>}></Route>

        <Route
          exact 
          path="/view-salarys" 
          element={<SalaryView/>}></Route>

        <Route 
          exact 
          path="/edit-salary/:id" 
          element={<EditSalary/>}></Route>

        <Route 
          exact 
          path="/add-salary" 
          element={<AddSalary/>}></Route>
        
        <Route 
          exact 
          path="/project-salary/:id" 
          element={<FindSalary/>}></Route> */}
          
    
          
        </Routes>
      </Router>
    </main>
  );
}

export default App;
