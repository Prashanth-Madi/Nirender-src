import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, updateProject } from "./services/ProjectService";

export default function UpdateTask() {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const {id,taskId}=useParams();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token"); 
        await axios.put(`http://localhost:8080/projects/${id}/tasks/${taskId}`, { name, description },{
            headers: {
                'Authorization': `Bearer +${token}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true // Add this if needed
        });
        // navigate('/showprojects');
        alert(`Task ID: ${id} Updated Succesfully`);
        navigate(`/viewtask/${id}`);
    };
    
        return (
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label>Task Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Task Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Update Task</button>
            </form>
        );
    }
//}