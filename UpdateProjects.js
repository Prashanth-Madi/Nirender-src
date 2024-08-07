import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject, updateProject } from "./services/ProjectService";

export default function UpdateProject() {
    
    const [id,setId]=useState();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const fetchProject = async () => {
    //         const response = await getProject(`/projects/user/${id}`);
    //         setName(response.data.name);
    //         setDescription(response.data.description);
    //     };
    //     fetchProject();
    // }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token"); 
        await axios.put(`http://localhost:8080/api/projects/${id}`, { name, description },{
            headers: {
                'Authorization': `Bearer +${token}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true // Add this if needed
        });
        // navigate('/showprojects');
        alert(`ID: ${id} Updated Succesfully`)
    };
    // useEffect(() => {

    //     if (id) {
    //         getProject(id).then((response) => {
    //             console.log(response.data)
    //             setName(response.data.name)
    //             setDescription(response.data.description)
    //         }).catch(error => {
    //             console.error(error);
    //         })
    //     }
    // }, [id])


    // const updatedata = { name, description }
    // console.log(updatedata);

    // if (id) {

    //     updateProject(id, updatedata).then((response) => {
    //         navigate('/view')
    //     }).catch(error => {
    //         console.error(error);
    //     })
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What's the ID Dawg:</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div>
                    <label>Project Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Update Project</button>
            </form>
        );
    }
//}