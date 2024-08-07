
import axios from "axios";
import { useState } from "react";
import { getToken } from "./services/AuthService";
import { useNavigate, useParams } from "react-router-dom";

function AddTask() {
    const {id}=useParams();

    const [name, setname] = useState('');
    const [description, setDescription] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createobj = { name, description };
        console.log(createobj);
        const token = getToken(); // Ensure this returns the correct token
       // const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQcmFzaCIsImlhdCI6MTcyMjk2MDE1MiwiZXhwIjoxNzIzMDQ2NTUyfQ.2ZQLisSCNeGGilXYkqcsbbhVR5ATqj3NIyarGbGPF4M"
       console.log(token)
try {
    const response = await axios.post(
        `http://localhost:8080/projects/${id}/tasks`, 
        createobj,
        {
            headers: {
                'Authorization': `Bearer +${token}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true // Add this if needed
        }
    );
    console.log("Response data:", response.data);
    navigate('/showprojects');
} catch (error) {
    console.error('Error is:', error.response ? error.response.data : error.message);
// axios({ method: 'post', url: 'http://localhost:8080/api/projects', headers: { 'Authorization': 'Bearer ' + token } })
// }catch(error){
//     console.log(error)
// }

    }}
    

    // ... rest of the component code ...
        return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card' id="background">
                        <div className='card-header'>
                            <h2 className='text-center'>Add Task</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Task Name</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter Task name'
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Task Description</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='description'
                                            className='form-control'
                                            placeholder='Enter Task Description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button type='submit'>Add Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default AddTask;
