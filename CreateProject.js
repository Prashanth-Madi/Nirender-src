// // import axios from "axios";
// // import { useState } from "react";
// // import { getToken } from "./services/AuthService";

// // function CreateProject() {

// //     //navigator=useNavigate();
// //     //const userId=useState('');
// //     const [name, setname] = useState('');
// //     const [description, setDescription] = useState('');

// //     const [userId, setuserId] = useState('');
// //     //const handleSubmit = async (e) => {
// //     function handleSubmit(e) {
// //         e.preventDefault();
// //         const createobj = { name, description };
// //         console.log(userId, createobj);
// //         const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW5kdSIsImlhdCI6MTcyMjk1ODA3MywiZXhwIjoxNzIzMDQ0NDczfQ.VgPAR-PLUFacmm3nw-1DWFuOPx7TV3_azPrS2BIc14U"
// //         console.log(token)
// //         axios.post('http://localhost:8080/api/projects', createobj,{headers: {
// //             'Authorization': `Bearer ${token}`,
// //             'Content-Type': 'application/json'
// //           }
            
// //         })
// //             .then(response => {
// //                 console.log(response.data);
// //             })
// //             .catch(error => { console.error('Error is:', error); });
// //             //saveProject(userId,createobj).then(response => {
// //               //console.log(response.data);}
// //                //Navigate('/dashboard')
// //               // alert("Created project Successfully")
// //         //   ).catch(error => 
// //         //       console.error('Error:',error)
// //         //     )
// //         //Redirect or show success messagecatch(error => console.error('Error:', error));
// //     };
// //     return (
// //         <div className='container'>
// //             <br /> <br />
// //             <div className='row'>
// //                 <div className='col-md-6 offset-md-3'>
// //                     <div className='card' id="background">
// //                         <div className='card-header'>
// //                             <h2 className='text-center'> Create Project</h2>
// //                         </div><div className='card-body'>
// //                             <form onSubmit={handleSubmit}>
// //                                 <div className='row mb-3'>
// //                                     <label className='col-md-3 control-label'> Project Name</label>
// //                                     <div className='col-md-9'>
// //                                         <input
// //                                             type='text'
// //                                             name='name'
// //                                             className='form-control'
// //                                             placeholder='Enter Project name'
// //                                             value={name}
// //                                             onChange={(e) => setname(e.target.value)}
// //                                         >
// //                                         </input>
// //                                     </div>
// //                                 </div>
// //                                 <div className='row mb-3'>
// //                                     <label className='col-md-3 control-label'> Project Description</label>
// //                                     <div className='col-md-9'>
// //                                         <input
// //                                             type='text'
// //                                             name='description'
// //                                             className='form-control'
// //                                             placeholder='Enter Description'
// //                                             value={description}
// //                                             onChange={(e) => setDescription(e.target.value)}
// //                                         >
// //                                         </input>
// //                                     </div>
// //                                 </div>
// //                                 <button type='Submit'>Create Project</button>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>  </div>
// //     );
// // }
// // export default CreateProject;

// import axios from "axios";
// import { useState } from "react";
// import { getToken } from "./services/AuthService";

// function CreateProject() {
//     const [name, setname] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const createobj = { name, description };
//         console.log(createobj);
//         // const token = getToken();
//         const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW5kdSIsImlhdCI6MTcyMjk1ODA3MywiZXhwIjoxNzIzMDQ0NDczfQ.VgPAR-PLUFacmm3nw-1DWFuOPx7TV3_azPrS2BIc14U"
//         console.log("Token:", token);
        
//         try {
//             const response = await axios.post(
//                 'http://localhost:8080/api/projects', 
//                 createobj,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },withCredentials:true
//                 }
//             );
//             console.log("Response data:", response.data);
//         } catch (error) {
//             console.error('Error is:', error.response ? error.response.data : error.message);
//         }
//     };


// export default CreateProject;


import axios from "axios";
import { useState } from "react";
import { getToken } from "./services/AuthService";
import { useNavigate } from "react-router-dom";

function CreateProject() {
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
        'http://localhost:8080/api/projects', 
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
                            <h2 className='text-center'>Create Project</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Project Name</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter Project name'
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Project Description</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='description'
                                            className='form-control'
                                            placeholder='Enter Description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button type='submit'>Create Project</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CreateProject;
