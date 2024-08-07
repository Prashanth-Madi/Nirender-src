import CreateProject from "./CreateProject";
import Dashboard from "./dashboard";
import HeaderComponent from "./Header";
import LoginComponent from "./loginComponent";
import RegisterComponent from "./registerComponent";
import UpdateProject from "./UpdateProjects";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewProjects from "./ViewProjects";
import DeleteProject from "./DeleteProject";
import { ViewTask } from "./ViewTask";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user" element={<CreateProject />}></Route>
          <Route path="/create" element={<CreateProject />}></Route>
          <Route path="/update" element={<UpdateProject />}></Route>
           <Route path="/showprojects" element={<ViewProjects />}></Route> 
          <Route path="/delete" element={<DeleteProject/>}></Route> 
          <Route path="/viewtask/:id" element={<ViewTask/>}></Route>
          <Route path="/addtask/:id"  element={<AddTask/>}></Route>
          <Route path="/:id/updatetask/:taskId" element={<UpdateTask/>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </>
  )
}

