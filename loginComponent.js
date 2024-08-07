import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPICall, saveLoggedInUser } from "./services/AuthService";
import axios from "axios";

const LoginComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();

    async function handleLoginForm(e) {

        e.preventDefault();

        // http://localhost:8081/api/auth"
        // export const loginAPICall = (username, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { username, password });
        // await loginAPICall(username, password).then((response) => {
        //     console.log(response.data);
        //     const token = 'Basic ' + window.btoa(username + ":" + password);
        //     storeToken(token);

            
        // }).catch(error => {
        //     console.error(error);
        // })

        try {
            const credentials = { username,password}; 
            console.log("Sending credentials:", credentials);
        
            const res = await axios.post("http://localhost:8080/api/auth/login", credentials);
            console.log("Response data:", res.data.jwt);
            const token=res.data.jwt;
            const storeToken=(token) => {
                localStorage.setItem("token", token);
                console.log("token stored")
            }
            storeToken(token);
            const fetchedToken=localStorage.getItem("token");
            console.log("Fetched token:",fetchedToken)
            saveLoggedInUser(username);
            navigator("/dashboard")

            window.location.reload(false);

        } catch (error) {
            console.error("Error during API call:", error);
        }
        

    }
    return (
        <>
            <img className='card-img' alt='design' />
            <div className='card-overlay'>
                <div className='container'>
                    <br /> <br />
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>

                            <div className='card' id="background">
                                <div className='card-header'>
                                    <h2 className='text-center'> Login Form </h2>
                                </div>
                                <div className='card-body'>
                                    <form>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Username</label>
                                            <div className='col-md-9'>
                                                <input
                                                    type='text'
                                                    name='username'
                                                    className='form-control'
                                                    placeholder='Enter username'
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                >
                                                </input>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label className='col-md-3 control-label'> Password </label>

                                            <div className='col-md-9'>
                                                <input
                                                    type='password'
                                                    name='password'
                                                    className='form-control'
                                                    placeholder='Enter password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className='form-group mb-3'>
                                            <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>
                                            <p> New User<a href="/register">Register</a></p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent