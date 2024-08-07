import axios from "axios";
import { useState,useEffect } from "react";
import { ViewTask } from "./ViewTask";
import { Link, useNavigate } from "react-router-dom";

function ViewProjects() {
    const [projects, setProjects] = useState([]);
    const navigate=useNavigate();

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const response = await axios.get('http://localhost:8080/api/projects');
    //         console.log(response.data.projects);
    //         setProjects(response.data.projects);
    //         console.log(projects);

            
    //     };
    //     fetchProjects();
    // }, []);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/projects');
                console.log("API response:", response.data.projects);
                setProjects(response.data.projects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        console.log("Projects state updated:", projects);
    }, [projects]);
    const handleViewTask=(id)=>{
        // console.log(id);
        navigate(`/viewtask/${id}`);

    }
    
    return (
        <div>
            <h2>Projects</h2>
            <table>
                <th>
                    <tr>
                        <th>Project Id</th>
                        <th>Project Name</th>
                        <th>Project Description</th>
                    </tr>
                </th>
                <body>
                    <tr>
                        <td>{projects.map(singleProject=>{
                            return <div>
                                 <div >
                                <td><p>{singleProject.id}</p></td>
                                <td><p>{singleProject.name}</p></td>
                                <td><p>{singleProject.description}</p></td>
                            </div>
                            <button onClick={()=>{handleViewTask(singleProject.id)}}>View Tasks</button>
                            </div>
                               
                            
                        })}</td>
                    </tr>
                </body>
            </table>
        </div>
    );
}

export default ViewProjects;