import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterStyle.css'

export default function Register() {

    const [dataForm, setDataForm] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""    
    })
    const history = useNavigate();

    const handleChange = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!dataForm.userName ||
            !dataForm.email ||
            !dataForm.password ||
            !dataForm.confirmPassword ) {
            alert("All fields are required.")
            return;
        }

        if (dataForm.password !== dataForm.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
       
        const dataFormRegister = {
            userName: dataForm.userName,
            email: dataForm.email,
            password: dataForm.password
        }
        console.log(dataFormRegister)


        history('/dashboard');
    }

    return (
        <div className='register-form'>
            <Form className='register-input' onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicUserName">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Username" 
                        name='userName'
                        onChange={handleChange}
                        value={dataForm.userName}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name='email'
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password"
                        name='password'
                        onChange={handleChange}
                        value={dataForm.password}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        name='confirmPassword'
                        onChange={handleChange}
                        value={dataForm.confirmPassword}
                    />
                </Form.Group>

                <div className="register-login">
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <span>  
                        Return to the
                        <Link className='returnLogin' to='/'>Login Page</Link>
                    </span>
                </div>
                
            </Form>
        </div>
    )
}
