import './register.css';
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../login/Login";
import {Navigate} from "react-router-dom";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/HomePage" />;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !retypePassword) {
            setFlag(true);
            alert("Please fill every field");
        } else {
            setFlag(false);

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            if (existingUsers.some(user => user.email === email)) {
                alert("Email is already taken. Please choose another.");
                return;
            }

            const newUser = {
                name,
                email,
                password,
            };

            existingUsers.push(newUser);

            localStorage.setItem("users", JSON.stringify(existingUsers));

            console.log("Saved in local storage!");
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className='container'>
            {login ? (
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className='form-control' placeholder='Enter unique username'
                               onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control' placeholder='Enter email'
                               onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' placeholder='Enter password'
                               onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Retype password</label>
                        <input type='password' className='form-control' placeholder='Retype password'
                               onChange={(event) => setRetypePassword(event.target.value)} />
                    </div>

                    <button type='submit' className='btn btn-dark btn-lg btn-block'>SIGN ME UP</button>

                    <p onClick={handleClick}>Already a member? <a>Sign in</a></p>

                </form>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Register;
