import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, updateProject } from "./services/ProjectService";

export default function DeleteProject() {
    
    const [id,setId]=useState();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token"); 
        await axios.delete(`http://localhost:8080/api/projects/${id}`,{
            headers: {
                'Authorization': `Bearer +${token}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true // Add this if needed
        });
        navigate('/showprojects');
    };
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What's the ID Dawg:</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <button type="submit">Delete Project</button>
            </form>
        );
    }
//}