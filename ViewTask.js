import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
export const ViewTask=()=>{
    const {id}=useParams();
    console.log(id)


    const [tasks, setTasks] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/projects/${id}/tasks`);
                console.log("API response:", response.data.projects);
                setTasks(response.data.tasks);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchTasks();
    }, []);

    const handleUpdateTask=(taskId)=>{
        navigate(`/${id}/updatetask/${taskId}`)

    }

    
    
    return (
        <div>
            <h2>Tasks</h2>
            <button type="submit" onClick={()=>{navigate(`/addtask/${id}`)}}>Add Task</button>
        
            <table>
                <th>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                    </tr>
                </th>
                <body>
                    <tr>
                        <td>{tasks.map(singleTask=>{
                    
                            return <div>
                                 <div>
                                <td><p>{singleTask.id}</p></td>
                                <td><p>{singleTask.name}</p></td>
                                <td><p>{singleTask.description}</p></td>
                            </div>
                            <button onClick={()=>{handleUpdateTask(singleTask.id)}}>Update Task</button>
                            <button onClick={async(e)=>{
                                            e.preventDefault();
                                            const token = localStorage.getItem("token"); 
                                            await axios.delete(`http://localhost:8080/projects/${id}/tasks/${singleTask.id}`,{
                                                headers: {
                                                    'Authorization': `Bearer +${token}`,
                                                    'Content-Type': 'application/json'
                                                },
                                                withCredentials: true // Add this if needed
                                            });
                                            navigate('/showprojects');
                                                }}>Delete Task</button>
                            </div>
                               
                            
                        })}</td>
                    </tr>
                </body>
            </table>
            
        </div>
    );
}


