import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './LoginStyle.css'


export default function Login() {
    const defaultEmail = 'user@example.com';
    const defaultPassword = '12345';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            alert("All fields are required.")
            return;
        }

        if(email !== defaultEmail && password !== defaultPassword){
            alert("Invalid input")
        } else {
            history('/dashboard');
        }
      };
    return (
        <div className='login-form'>
            <Form onSubmit={handleSubmit} className='form-input'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value)}
                    />
                </Form.Group>

                <div className="btn-login-register">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Link className='registerLink' to='/register'>
                        Register
                    </Link>
                </div>
            </Form>
        </div>
  )
}
